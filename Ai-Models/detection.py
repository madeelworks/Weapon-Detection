import cv2
import torch
import numpy as np
import os
from ultralytics import YOLO

# -----------------------------
# CONFIGURATION
# -----------------------------
MODEL_PATH = "C:\\Users\\Dell\\Desktop\\ReconEye\\Weapon-Detection\\Ai-Models\\weights\\best.pt"          # Path to your trained weights
OUTPUT_DIR = "results"          # Output directory
FRAME_COUNT = 32                # Number of frames to extract
SAVE_VIDEO = True               # Save annotated video output

# -----------------------------
# MAIN PIPELINE
# -----------------------------
def extract_frames(video_path, num_frames=32):
    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

    if total_frames == 0:
        raise ValueError("Cannot read video or zero frames found.")

    # Select evenly spaced frame indices
    frame_indices = np.linspace(0, total_frames - 1, num_frames, dtype=int)
    frames = []

    for i in range(total_frames):
        ret, frame = cap.read()
        if not ret:
            break
        if i in frame_indices:
            frames.append(frame)
    cap.release()
    return frames


def detect_on_frames(model, frames):
    results = []
    for idx, frame in enumerate(frames):
        detections = model.predict(source=frame, verbose=False)
        results.append(detections)
    return results


def annotate_and_save(frames, results, out_dir, save_video=False, input_path=None):
    os.makedirs(out_dir, exist_ok=True)
    out_frames = []

    for i, (frame, res) in enumerate(zip(frames, results)):
        annotated = res[0].plot()  # YOLOv8 visualizer
        cv2.imwrite(f"{out_dir}/frame_{i:02d}.jpg", annotated)
        out_frames.append(annotated)

    if save_video and input_path:
        h, w, _ = out_frames[0].shape
        fps = 10  # can adjust
        output_path = os.path.join(out_dir, "detected_video.mp4")
        writer = cv2.VideoWriter(output_path, cv2.VideoWriter_fourcc(*'mp4v'), fps, (w, h))
        for f in out_frames:
            writer.write(f)
        writer.release()
        print(f"✅ Saved annotated video at: {output_path}")


def main(video_path):
    # Load model
    print("🔹 Loading model...")
    model = YOLO(MODEL_PATH)

    print("🔹 Extracting frames...")
    frames = extract_frames(video_path, FRAME_COUNT)

    print(f"🔹 Running detection on {len(frames)} frames...")
    results = detect_on_frames(model, frames)

    print("🔹 Annotating and saving results...")
    annotate_and_save(frames, results, OUTPUT_DIR, save_video=SAVE_VIDEO, input_path=video_path)

    print("✅ Done! All frames saved in:", OUTPUT_DIR)


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="Weapon Detection on Video using YOLO")
    parser.add_argument("--video", type=str, required=True, help="C:\\Users\\Dell\\Desktop\\ReconEye\\Weapon-Detection\\video.avi")
    args = parser.parse_args()

    main(args.video)

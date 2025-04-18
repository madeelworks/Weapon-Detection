import os
import cv2
import shutil
import numpy as np

# === CONFIGURATION ===
base_dataset_path = r'C:\Users\HP-PC\Desktop\final-year-project\Weapon-Detection\Ai-Models\Assets\Dataset\NewDataset'

# Output folders
preprocessed_base = os.path.join(base_dataset_path, 'PreprocessedImages')
yolo_output_base = os.path.join(base_dataset_path, 'YoloAnnotations')

def ensure_dirs(subfolder):
    os.makedirs(os.path.join(preprocessed_base, subfolder), exist_ok=True)
    os.makedirs(os.path.join(yolo_output_base, subfolder), exist_ok=True)

def load_and_resize_image(image_path, target_size=(416, 416)):
    image = cv2.imread(image_path)
    if image is None:
        print(f"[ERROR] Cannot load image: {image_path}")
        return None
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    image_resized = cv2.resize(image, target_size)
    image_normalized = image_resized / 255.0
    return image_normalized

def process_yolo_dataset(image_folder, label_folder, subset):
    image_count = 0
    instance_count = 0
    ensure_dirs(subset)

    for file in os.listdir(image_folder):
        if file.lower().endswith(('.jpg', '.jpeg', '.png')):
            image_path = os.path.join(image_folder, file)
            label_file = os.path.splitext(file)[0] + '.txt'
            label_path = os.path.join(label_folder, label_file)

            image = load_and_resize_image(image_path)
            if image is None:
                continue

            # Save preprocessed image
            out_image_path = os.path.join(preprocessed_base, subset, file)
            cv2.imwrite(out_image_path, cv2.cvtColor((image * 255).astype(np.uint8), cv2.COLOR_RGB2BGR))

            # Copy annotation file
            if os.path.exists(label_path):
                out_label_path = os.path.join(yolo_output_base, subset, label_file)
                shutil.copy(label_path, out_label_path)

                # Count number of objects in the annotation
                with open(label_path, 'r') as f:
                    lines = f.readlines()
                    instance_count += len(lines)

            image_count += 1

    print(f"[{subset.upper()}] Images: {image_count}, Instances: {instance_count}")

# === RUN SCRIPT ===
for subset in ['train', 'valid']:
    images_dir = os.path.join(base_dataset_path, subset, 'images')
    labels_dir = os.path.join(base_dataset_path, subset, 'labels')
    process_yolo_dataset(images_dir, labels_dir, subset)

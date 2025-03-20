from ultralytics import YOLO
model = YOLO('yolov8s.pt') 

model.train(data='./data.yaml', epochs=10, imgsz=416)
results = model.evaluate(data='./data.yaml')
print(results)

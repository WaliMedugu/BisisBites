import os
from rembg import remove
from PIL import Image

images_to_process = [
    "foil-cake.png",
    "cake-parfait.png",
    "banana-bread.png",
    "standard-cake.png",
    "birthday-cake.png",
    "custom-cake.png",
    "hero-img.png"
]

assets_dir = r"C:\Code\Paid Projects\BisisBites\client\src\assets\images"

print("Starting background removal...")
for img_name in images_to_process:
    img_path = os.path.join(assets_dir, img_name)
    if os.path.exists(img_path):
        print(f"Processing: {img_name}...")
        try:
            inp = Image.open(img_path)
            out = remove(inp)
            out.save(img_path)
            print(f"Successfully processed {img_name}!")
        except Exception as e:
            print(f"Error processing {img_name}: {e}")
    else:
        print(f"File not found: {img_path}")

print("Background removal completed.")

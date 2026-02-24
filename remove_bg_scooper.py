from PIL import Image

def process_image(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()

    new_data = []
    # If the pixel is mostly white, make it transparent
    for item in data:
        if item[0] > 230 and item[1] > 230 and item[2] > 230:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    
    # Do NOT over-crop. Let's make sure we just crop out a tiny amount of the border to avoid cutting off the actual graphic.
    width, height = img.size
    crop_pixels = 0 # No crop
    img = img.crop((crop_pixels, crop_pixels, width - crop_pixels, height - crop_pixels))

    img.save(output_path, "PNG")

process_image("/Users/viracis/Desktop/Projects/WizardWash/public/images/Virginia Scooper.png", "/Users/viracis/Desktop/Projects/WizardWash/public/images/Virginia Scooper Transparent.png")

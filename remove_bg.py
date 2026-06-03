from PIL import Image

def process_image(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()

    new_data = []
    # If the pixel is mostly white/grey, make it transparent
    for item in data:
        # Check if the pixel is close to white (higher than 220 in all RGB channels)
        if item[0] > 200 and item[1] > 200 and item[2] > 200:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    
    # We should also crop the image because the "border" is literally a grey frame around the jpg.
    # Let's crop it slightly to remove the border artifact.
    # We can use img.crop
    width, height = img.size
    crop_pixels = 4 # crop 4 pixels from each side
    img = img.crop((crop_pixels, crop_pixels, width - crop_pixels, height - crop_pixels))

    img.save(output_path, "PNG")

process_image("/Users/viracis/Desktop/Projects/WizardWash/public/images/Golds Gym.jpg", "/Users/viracis/Desktop/Projects/WizardWash/public/images/Golds Gym Transparent.png")

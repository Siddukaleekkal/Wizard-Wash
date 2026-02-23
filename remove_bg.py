from PIL import Image

def remove_white_bg(input_path, output_path, threshold=240):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Change all white (also shades of whites) pixels to transparent
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            newData.append((255, 255, 255, 0))
        else:
            # Optionally blend edges, but hard cutoff is fine for now
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")

remove_white_bg("/Users/viracis/Downloads/Vigil Logo.png", "/Users/viracis/Desktop/Projects/WizardWash/public/images/vigil-transparent.png")

import os
import json

def generate_portfolio_json(root_dir="public/images"):
    portfolios = []
    folder_id = 1

    for item in os.listdir(root_dir):
        item_path = os.path.join(root_dir, item)
        if os.path.isdir(item_path):
            folder_name = item.replace('_', ' ')
            name_parts = folder_name.split()
            location = ""
            name = ""
            location_keywords = ["gurgaon", "jaipur", "bangalore", "pune", "mumbai", "vadodara", "noida", "assam", "lanka", "cp", "vatika", "cyberrgreen"]

            processed_parts = []
            for part in name_parts:
                if part.lower() in location_keywords and not location:
                    location = part.lower().capitalize()
                else:
                    processed_parts.append(part)
            name = " ".join(processed_parts).strip()

            image_files = sorted([f for f in os.listdir(item_path) if os.path.isfile(os.path.join(item_path, f))])
            image_urls = [f"/images/{item}/{f}" for f in image_files]
            representative_image = image_urls[0] if image_urls else ""

            portfolios.append({
                "id": folder_id,
                "name": name if name else folder_name,
                "location": location,
                "image": representative_image,
                "content": {
                    "id": folder_id,
                    "name": name if name else folder_name,
                    "location": location,
                    "description": f"Images from {name.lower() if name else folder_name.lower()}.",
                    "images": image_urls,
                }
            })
            folder_id += 1
        elif os.path.isfile(item_path) and item.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')):
            name_base, ext = os.path.splitext(item)
            portfolios.append({
                "id": folder_id,
                "name": name_base.replace('_', ' '),
                "location": "",
                "image": f"/images/{item}",
                "content": {
                    "id": folder_id,
                    "name": name_base.replace('_', ' '),
                    "location": "",
                    "description": f"Image: {name_base.replace('_', ' ').lower()}.",
                    "images": [f"/images/{item}"],
                }
            })
            folder_id += 1

    json_output = json.dumps({"portfolios": portfolios}, indent=2)
    return json_output

if __name__ == "__main__":
    output_json = generate_portfolio_json()
    print(output_json)

    # To save to a file:
    with open("portfolios.json", "w") as f:
        f.write(output_json)
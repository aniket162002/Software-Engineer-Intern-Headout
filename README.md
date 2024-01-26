Build and Run:
Create a data directory and generate some text files inside it (e.g., 1.txt, 2.txt, ..., 30.txt).
Create the Dockerfile and app.js in the same directory as your data directory.
Run the following commands in the terminal:
bash : -
docker build -t your-image-name .
docker run -p 8080:8080 --memory=1500m --cpus=2 your-image-name

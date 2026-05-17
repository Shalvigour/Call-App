    # Step 1: Use an official Nginx image as the base
   FROM nginx:alpine

   # Step 2: Copy your local files into the default Nginx directory
   COPY . /usr/share/nginx/html

   # Step 3: Expose port 80 so we can access it in the browser
   EXPOSE 80
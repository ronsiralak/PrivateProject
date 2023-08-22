# Use the official Python image as the base image
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY app/myproject/requirements.txt .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY app/myproject .

# Expose the port the app runs on
EXPOSE 8000  
#Default port for Django

# Define the command to run the application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

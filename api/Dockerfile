# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
RUN mkdir /apps
WORKDIR /apps
COPY . .
RUN pip install -r requirements.txt

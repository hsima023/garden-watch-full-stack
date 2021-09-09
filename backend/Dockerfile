FROM python:3.8.5-alpine
ENV PYTHONUNBUFFERED 1
ENV CRYPTOGRAPHY_DONT_BUILD_RUST=1
RUN apk update && apk add postgresql-dev \
                          gcc \
                          python3-dev \
                          musl-dev \
                          libffi-dev \
			  openssl-dev \
			  cargo 
WORKDIR /code
COPY requirements.txt /code/requirements.txt
RUN pip install -r requirements.txt
COPY . /code

COPY ./entrypoint.sh /
ENTRYPOINT ["sh", "/entrypoint.sh"]

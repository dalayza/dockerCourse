FROM python:3.6
LABEL manteiner 'Denis Alayza <denis.aalyza@gmail.com>'

RUN useradd www && \
    mkdir /app && \
    mkdir /log && \
    chown www /log

USER www
VOLUME /log
WORKDIR /app
EXPOSE 8000

ENTRYPOINT ["/usr/local/bin/phyton"]
CMD ["run.py"]
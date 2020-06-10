FROM loadimpact/k6:0.26.2

USER root

RUN apk add --no-cache ca-certificates

RUN mkdir /k6-tests

COPY . /k6-tests/

WORKDIR /k6-tests

ENTRYPOINT ["sh", "run.sh"]
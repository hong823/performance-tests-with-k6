# Generating load within EKS cluster
DOCKER_URL=example.docker.com
DOCKER_REPO=performance-test:latest

docker build -t $DOCKER_REPO .

docker tag performance-test:latest $DOCKER_URL/$DOCKER_REPO

docker push $DOCKER_URL/$DOCKER_REPO

kubectl -n ask delete job performance-tests
kubectl -n ask apply -f deployment/test.yaml

watch -n 1 'kubectl -n ask top pod'
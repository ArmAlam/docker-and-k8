Basic instructions

1. docker build -t kub-first-app .

2. kubectl create deployment first-app --image=armanalam/kub-first-app (N.B: image hosted in dockerhub)

3. kubectl expose deployment first-app --type=LoadBalancer --port=8080

4. kubectl scale deployment/first-app --replicas=3 // scaling pods using multiple replica of the pods

## KUBERNETES COMMANDS

Here are the list of commands that are used while wokring with kubernetes.

- **minikube dashboard .** -- view minikube dashboard.

- **minikube service <service_name> .** -- open service in a browser.

- **kubectl create deployment <deployment_name> --image=<image_name_hosted_on_docker_registry> .** -- create a deployment object

- **kubectl get deployments .** -- list all deployments.

- **kubectl get pods .** -- list all pods.

- **kubectl delete deployment <deployment_name> .** -- deletes a deployment object.

- **kubectl expose deployment <deployment_name> --type=LoadBalancer --port=<port_no> .** -- creates a service.

- **kubectl scale deployment/<deployement_name> --replicas=3 .** -- 3 replicas of the same pod will run. Used for scaling.

## TERMS

- **POD** -- A pod is the smallest execution unit in Kubernetes which can hold and run multiple containers. Pod hosts one or more container and their resources (volumes, IP, run config etc).

- **WORKER NODE** -- POD with containers run inside a worker node. Worker node runs application containers. Nodes are virtual machine or instances with a certain hardware capacity which hosts one or multiple pods and communicate with the Cluster.

- **PROXY/ CONFIG** -- Used to control network traffic of a pod.

- **MASTER NODE / CONTROL PLANE** -- Master node is responsible for cluster management and for providing the API that is used to configure and manage resources within the Kubernetes cluster. Master node controls all worker nodes.

- **CLUSTER** --: All together (above components) forms a cluster. Cluster is a set of machines which are running the Containerized Application (Worker Nodes) or control other nodes (Master Node).

- **KUBELET** -- It is the communication device between master and worker node.

- **KUBE PROXY** -- Proxy service is reponsible for handling incoming and outgoing traffic to ensure that everything works as desired.

- **API Server** -- It is a simple server inside the master node. It acts as the counter part for the kubelet services running on the worker node. This is the counter part for the communication between worker and master node.

- **Scheduler** -- Watches for new PODS. Select worker nodes to run them on.

- **KUBE CONTROLLER MANAGER** -- Watches and controls worker nodes. Reponsilbe for ensuring correct number of pods up and running.

- **Services** -- A logical set (groups) of PODS with a unique, Pod and container independent IP address.

- **KUBECTL** -- A tool for sending instructions to the cluster (e.g create a a new deployment, change deployment etc). Can send instructions to the master node.

- **Objects** -- Kubernetes work with object. Some common objects are Pods, Deployments, Services, Volume etc.

- **POD OBJECT** -- Kubernetes create pods and pods hold container. Pods run one or multiple containers. Pod can contains shared resources (e.g volumes). Pods can communicate with other pods. It has a cluster-internal IP address. Containers inside a pod can communicate via localhost.

- **DEPLOYMENT OBJECT** -- Controls one or multiple pods. It is also known as controller. In Deployment object ,you set a desired state, and Kubernetes then changes the actual state. It defines which Pods and contaienrs to run and the number of instances. Deployments can be paused, deleted and rolled back. Deployments can be scaled dynamically and automaticaly.

- **SERVICE OBJECT** -- to reach a pod and a container running in a pod, we need a service. It is responsible for exposing pods to other pods in the cluster, or to visitors outside of the cluster. Services group Pods together with a shared IP address. The IP address won't change. Services can allow external access to Pods. Withour services, Pods are very hard to reach and communication is difficult. Reaching a Podf from outside the Cluster is not possible at all without services.

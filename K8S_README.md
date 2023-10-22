## KUBERNETES COMMANDS

Here are the list of commands that are used while wokring with kubernetes.

- **minikube start --driver=docker .** -- creates a kubernetes cluster.

- **minikube dashboard .** -- view minikube dashboard.

- **minikube status .** -- view minikube status.

- **minikube service <service_name> .** -- open service in a browser.

- **kubectl create deployment <deployment_name> --image=<image_name_hosted_on_docker_registry> .** -- create a deployment object

- **kubectl get deployments .** -- list all deployments.

- **kubectl get replicaset .** -- list replicasets.

- **kubectl get services .** -- list all services.

- **kubectl get nodes .** -- get status of nodes.

- **kubectl get pods .** -- list all pods.

- **kubectl logs <pod_name> .** -- shows log of a pod.

- **kubectl describe pod <pod_name> .** -- shows additional information of a pod.

- **kubectl edit deployment <deployment_name> .** -- command to update a deployment.

- **kubectl delete deployment <deployment_name> .** -- deletes a deployment.

- **kubectl exec -it <pod_name> -- bin/bash .** -- open container terminal.

- **kubectl apply -f <file_name> .** -- takes a file as a configuration parameter and does whatever instruction is written there.

- **kubectl delete -f <file_name> .** -- deletes generate component (service, deployment etc).

- **kubectl expose deployment <deployment_name> --type=LoadBalancer --port=<port_no> .** -- creates a service.

- **kubectl scale deployment/<deployement_name> --replicas=3 .** -- 3 replicas of the same pod will run. Used for scaling.

- **kubectl taint nodes <node_name> key=value:taint-effect .** -- 3 replicas of the same pod will run. Used for scaling.

## TERMS

- **NODE .** -- A node is a machine physical or virtual on which kubernetes is installed. Node is a woker machine, this is where container launched by kubernetes.


- **POD** -- A pod is the smallest execution unit in Kubernetes which can hold and run multiple containers. Pod hosts one or more container and their resources (volumes, IP, run config etc). It's an abstraction over container. Each pod has their own ip address (internal IP address) can communicate to other pods through it. If pod is removed, it's associated resources also removed.

- **SERVICE** -- Service is basically a static IP address or permanent IP address that can be attached to each pod. Lifecyle of pod and service are not connected. So even if pod dies, service and it's ip address stays.

- **INGRESS** -- It is an API object that provides routing rules to manage external access to the services in a Kubernetes cluster. Used to route traffice into cluster.

- **CONFIGMAP** -- It usually contains configuration data like database url.

- **SECRET** -- It is used to store secret data. Store data in base64 encoded format. It contains data like username, password etc.

- **WORKER NODE** -- POD with containers run inside a worker node. Worker node runs application containers. Nodes are virtual machine or instances with a certain hardware capacity which hosts one or multiple pods and communicate with the Cluster. Nodes are the cluster service that actually do the work.

- **PROXY/ CONFIG** -- Used to control network traffic of a pod.

- **MASTER NODE / CONTROL PLANE** -- Master node is responsible for cluster management and for providing the API that is used to configure and manage resources within the Kubernetes cluster. Master node controls all worker nodes. There are 4 processes that run on every master node. They are: 1. API server, 2. Scheduler, 3. Controller Manager, 3. etcd

- **CLUSTER** --: All together (above components) forms a cluster. Cluster is a set of machines which are running the Containerized Application (Worker Nodes) or control other nodes (Master Node). A cluster is a set of nodes grouped together. A cluster must have the follwoing processes:

  1. Kubelet, 2.Kube Proxy, 3.Container Runtime.

- **KUBELET** -- It is the communication device between master and worker node. Kubelet interacts with both the container and node. Kubelet starts pod with a container inside. Kubelet is the agent that runs on each node in the cluster.The agent is responsible for making sure that containers are running on the nodes as expected.

- **KUBE PROXY** -- Proxy service is reponsible for handling incoming and outgoing traffic to ensure that everything works as desired.

- **API Server** -- It is a simple server inside the master node. It acts as the frontend for the kubernetes. This is the counter part for the communication between worker and master node.

- **ETCD** -- It is a key value store. It is used by kubernetes to store all data that are used to manage the cluster.

- **Scheduler** -- Watches for new PODS. Select worker nodes to run them on. It is responsible for distributing work or containers accross multiple nodes. It looks for newly created containers and assign them to nodes.

- **KUBE CONTROLLER MANAGER** -- Watches and controls worker nodes. Reponsilbe for ensuring correct number of pods up and running. Controllers are the brain behind the orchestration. They are responsible for noticing and responding when nodes, containers or endpoints goes down. Controllers make decisions to bring up new containers in such cases.

- **Services** -- A logical set (groups) of PODS with a unique, Pod and container independent IP address.

- **KUBECTL** -- A tool for sending instructions to the cluster (e.g create a a new deployment, change deployment etc). Can send instructions to the master node.

- **Objects** -- Kubernetes work with object. Some common objects are Pods, Deployments, Services, Volume etc.

- **POD OBJECT** -- Kubernetes create pods and pods hold container. Pods run one or multiple containers. Pod can contains shared resources (e.g volumes). Pods can communicate with other pods. It has a cluster-internal IP address. Containers inside a pod can communicate via localhost.

- **DEPLOYMENT OBJECT** -- Controls one or multiple pods. It is also known as controller. In Deployment object ,you set a desired state, and Kubernetes then changes the actual state. It defines which Pods and contaienrs to run and the number of instances. Deployments can be paused, deleted and rolled back. Deployments can be scaled dynamically and automaticaly. It is an abstraction over Pods. Deployment manages a replica set. Replicaset manages all the replicas of a pod. Everything below deployment is handled by kubernetes.

- **SERVICE OBJECT** -- to reach a pod and a container running in a pod, we need a service. It is responsible for exposing pods to other pods in the cluster, or to visitors outside of the cluster. Services group Pods together with a shared IP address. The IP address won't change. Services can allow external access to Pods. Withour services, Pods are very hard to reach and communication is difficult. Reaching a Podf from outside the Cluster is not possible at all without services.

- **Taints and Tolerations** -- Taints and Tolerations are used to set restrictions on what PODs can be scheduled on a node. Taints are set on nodes and tolerations are set on pods. Example command: kubectl taint nodes <node_name> key=value:taint-effect. Here 'taint-effect' defines what would happen to the pod if they don't tolerate the taint. There are 3 taint effects. 1. NoSchedule (Pod will not be scheduled on the node), 2. PreferNoSchedule (System will to avoid placing a node. But thats not guaranteed), 3. NoExecute (New pod will not be scheduled on the node and existing node if any will be evicted if they tolerate the taint ). Tolerations are added to pods.


                              <------------------------------------------------------>

A kubetes defination file always contain 4 top level fields. They are: 1. apiVersion 2.kind 3.metadata 4.spec

- **apiVersion** -- This is the version of kubernetes API. Example: v1, apps/v1

- **kind** -- kind refers to the type of object that we want to create. Example: Pod, Deployment, Service etc.

- **metadata** -- Metadata is data about the object like its name, label etc.

- **spec** -- spec field specifies the pod and its desired state (such as the container image name for each container within that pod.

<!-- SAMPLE KUBERNETES CONFIG FILE -->
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  labels:
    app: myapp
    type: frontend
spec:
  containers:
    - name: nginx-container
      image: nginx
<!-- SAMPLE CONFIG FILE END -->

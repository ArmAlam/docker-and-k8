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

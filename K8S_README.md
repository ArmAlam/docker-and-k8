- **POD** -- A pod is the smallest execution unit in Kubernetes which can hold and run multiple containers. Pod hosts one or more container and their resources (volumes, IP, run config etc).

- **WORKER NODE** -- POD with containers run inside a worker node. Worker node runs application containers. Nodes are virtual machine or instances

- **PROXY/ CONFIG** -- Used to control network traffic of a pod.

- **MASTER NODE / CONTROL PLANE** -- Master node is responsible for cluster management and for providing the API that is used to configure and manage resources within the Kubernetes cluster. Master node controls all worker nodes.

- **CLUSTER** --: All together (above components) forms a cluster.

- **KUBELET** -- It is the communication device between master and worker node.

- **KUBE PROXY** -- Proxy service is reponsible for handling incoming and outgoing traffic to ensure that everything works as desired.

- **API Server** -- It is a simple server inside the master node. It acts as the counter part for the kubelet services running on the worker node. This is the counter part for the communication between worker and master node.

- **Scheduler** -- Watches for new PODS. Select worker nodes to run them on.

- **KUBE CONTROLLER MANAGER** -- Watches and controls worker nodes. Reponsilbe for ensuring correct number of pods up and running.

# Instructions
99.9% Chat GPT generated code

kubectl label nodes <control plane> labfiles="true"
mkdir ~/labfiles
Copy your files to ~/labfiles
git clone https://github.com/olaekdahl/k8s-lab-files-server.git on your lab server.
cd k8s-lab-files-server/
kubectl apply -f pv.yaml,pvc.yaml,deployment.yaml
kubectl expose deployment labfiles-server --type=NodePort
kubectl get svc
curl ifconfig.io
http://<ip address>:<port number>/files
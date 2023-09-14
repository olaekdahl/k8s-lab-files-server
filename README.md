# Instructions
## 99.9% Chat GPT generated code

1. kubectl label nodes `<control plane>` labfiles="true"
2. mkdir ~/labfiles
3. Copy your files to ~/labfiles
4. git clone https://github.com/olaekdahl/k8s-lab-files-server.git on your lab server.
5. cd k8s-lab-files-server/
6. kubectl apply -f pv.yaml,pvc.yaml,deployment.yaml
7. kubectl expose deployment labfiles-server --type=NodePort
8. kubectl get svc to get port number
9. curl ifconfig.io to get public ip address
10. http://`<ip address>:<port number>`/
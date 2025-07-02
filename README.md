1. Run `kubectl label nodes <control plane> labfiles="true"` on the node where your file to be copied are located
2. `mkdir ~/labfiles`
3. Copy your files to ~/labfiles
4. `git clone https://github.com/olaekdahl/k8s-lab-files-server.git` on your lab server
5. `cd k8s-lab-files-server/`
6. `kubectl apply -f pv.yaml,pvc.yaml,deployment.yaml`
    * Check folder location in `pv.yaml`. It's `/home/student/labfiles` by default
8. `kubectl expose deployment labfiles-server --type=NodePort`
9. `kubectl get svc` to get port number
10. `curl ifconfig.io` to get public ip address
11. http://`<ip address>:<port number>`/

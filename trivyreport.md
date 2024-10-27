  ~/code/jig/webapp   draft wip *1 !3 ?6 ❯ trivy k8s --report=summary                                                                                                               5m 2s  base
2024-10-27T13:41:13+08:00	INFO	Node scanning is enabled
2024-10-27T13:41:13+08:00	INFO	If you want to disable Node scanning via an in-cluster Job, please try '--disable-node-collector' to disable the Node-Collector job.
332 / 332 [-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------] 100.00% 2 p/s

Summary Report for arn:aws:eks:ap-southeast-1:851725219470:cluster/sit-cmts


Workload Assessment
┌───────────────────┬────────────────────────────────────────┬───────────────────────────┬───────────────────┬───────────────────┐
│     Namespace     │                Resource                │      Vulnerabilities      │ Misconfigurations │      Secrets      │
│                   │                                        ├────┬─────┬──────┬─────┬───┼───┬───┬───┬───┬───┼───┬───┬───┬───┬───┤
│                   │                                        │ C  │  H  │  M   │  L  │ U │ C │ H │ M │ L │ U │ C │ H │ M │ L │ U │
├───────────────────┼────────────────────────────────────────┼────┼─────┼──────┼─────┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
│ ps                │ ConfigMap/ps-background-config         │    │     │      │     │   │   │ 1 │ 1 │   │   │   │   │   │   │   │
│ cmts-sit          │ ConfigMap/a360-backend-techlens-config │    │     │      │     │   │   │   │ 1 │   │   │   │   │   │   │   │
│ cmts-sit          │ Deployment/a360-roundcube              │ 23 │ 274 │ 1109 │ 400 │ 5 │   │ 2 │ 4 │ 5 │   │   │   │   │   │   │
│ cmts-sit          │ Deployment/a360-frontend-a360-frontend │    │     │      │     │   │   │ 1 │ 3 │ 5 │   │   │   │   │   │   │
│ cmts-sit          │ Deployment/a360-backend                │    │     │      │     │   │   │ 1 │ 3 │ 5 │   │   │   │   │   │   │
│ cmts-sit          │ Deployment/a360-greenmail              │    │     │  31  │ 44  │   │   │ 1 │ 4 │ 5 │   │   │   │   │   │   │
│ cmts-sit          │ ConfigMap/apacheds-files               │    │     │      │     │   │   │ 1 │ 1 │   │   │   │   │   │   │   │
│ cmts-sit          │ Deployment/aws-cli                     │    │     │      │     │   │   │ 1 │ 4 │ 9 │   │   │   │   │   │   │
│ cmts-sit          │ Deployment/a360-backend-techlens       │    │     │  1   │ 3   │   │   │ 1 │ 3 │ 5 │   │   │   │   │   │   │
│ cmts-sit          │ Deployment/nginx-deployment            │ 2  │ 13  │  34  │ 100 │   │   │ 2 │ 4 │ 9 │   │   │   │   │   │   │
│ amazon-cloudwatch │ ConfigMap/fluent-bit-cluster-info      │    │     │      │     │   │   │   │ 1 │   │   │   │   │   │   │   │
│ amazon-cloudwatch │ DaemonSet/fluent-bit                   │    │     │      │     │   │   │ 2 │ 4 │ 6 │   │   │   │   │   │   │
└───────────────────┴────────────────────────────────────────┴────┴─────┴──────┴─────┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
Severities: C=CRITICAL H=HIGH M=MEDIUM L=LOW U=UNKNOWN


Infra Assessment
┌─────────────┬──────────────────────────────────────────────────────────────────────┬────────────────────────┬─────────────────────┬───────────────────┐
│  Namespace  │                               Resource                               │    Vulnerabilities     │  Misconfigurations  │      Secrets      │
│             │                                                                      ├────┬────┬─────┬────┬───┼───┬───┬────┬────┬───┼───┬───┬───┬───┬───┤
│             │                                                                      │ C  │ H  │  M  │ L  │ U │ C │ H │ M  │ L  │ U │ C │ H │ M │ L │ U │
├─────────────┼──────────────────────────────────────────────────────────────────────┼────┼────┼─────┼────┼───┼───┼───┼────┼────┼───┼───┼───┼───┼───┼───┤
│ kube-system │ DaemonSet/csi-secrets-store-secrets-store-csi-driver                 │ 2  │ 3  │ 29  │ 61 │   │   │ 4 │ 11 │ 15 │   │   │   │   │   │   │
│ kube-system │ Service/kube-dns                                                     │    │    │     │    │   │   │   │ 1  │    │   │   │   │   │   │   │
│ kube-system │ DaemonSet/aws-node                                                   │ 28 │ 47 │ 225 │ 3  │   │   │ 7 │ 13 │ 24 │   │   │   │   │   │   │
│ kube-system │ DaemonSet/kube-proxy                                                 │ 2  │ 5  │ 13  │ 2  │   │   │ 3 │ 5  │ 8  │   │   │   │   │   │   │
│ kube-system │ Deployment/autoscaler-aws-cluster-autoscaler                         │    │    │     │    │   │   │ 1 │ 4  │ 9  │   │   │   │   │   │   │
│ kube-system │ Service/aws-load-balancer-webhook-service                            │    │    │     │    │   │   │   │ 1  │    │   │   │   │   │   │   │
│ kube-system │ DaemonSet/eks-pod-identity-agent                                     │ 4  │ 14 │ 44  │ 2  │   │   │ 5 │ 8  │ 18 │   │   │   │   │   │   │
│ kube-system │ DaemonSet/secrets-provider-aws-secrets-store-csi-driver-provider-aws │ 1  │ 1  │  4  │    │   │   │ 1 │ 4  │ 5  │   │   │   │   │   │   │
│ kube-system │ Deployment/aws-load-balancer-controller                              │ 1  │ 1  │  4  │ 1  │   │   │   │ 2  │ 9  │   │   │   │   │   │   │
│ kube-system │ Service/autoscaler-aws-cluster-autoscaler                            │    │    │     │    │   │   │   │ 1  │    │   │   │   │   │   │   │
│ kube-system │ Deployment/metrics-server                                            │    │    │     │    │   │   │   │ 1  │ 4  │   │   │   │   │   │   │
│ kube-system │ Deployment/coredns                                                   │ 1  │ 2  │  9  │ 1  │   │   │ 1 │ 4  │ 4  │   │   │   │   │   │   │
│ kube-system │ Service/metrics-server                                               │    │    │     │    │   │   │   │ 1  │    │   │   │   │   │   │   │
│ kube-system │ ConfigMap/extension-apiserver-authentication                         │    │    │     │    │   │   │   │ 1  │    │   │   │   │   │   │   │
│             │ Node/ip-10-0-41-251.ap-southeast-1.compute.internal                  │    │    │     │    │   │   │ 4 │    │    │   │   │   │   │   │   │
└─────────────┴──────────────────────────────────────────────────────────────────────┴────┴────┴─────┴────┴───┴───┴───┴────┴────┴───┴───┴───┴───┴───┴───┘
Severities: C=CRITICAL H=HIGH M=MEDIUM L=LOW U=UNKNOWN


RBAC Assessment
┌─────────────┬────────────────────────────────────────────────────────────────────┬────────────────────┐
│  Namespace  │                              Resource                              │  RBAC Assessment   │
│             │                                                                    ├────┬───┬───┬───┬───┤
│             │                                                                    │ C  │ H │ M │ L │ U │
├─────────────┼────────────────────────────────────────────────────────────────────┼────┼───┼───┼───┼───┤
│ kube-system │ Role/eks:node-manager                                              │ 1  │   │ 2 │   │   │
│ kube-system │ Role/eks:addon-manager                                             │    │ 1 │ 3 │   │   │
│ kube-system │ Role/eks-vpc-resource-controller-role                              │    │   │ 2 │   │   │
│ kube-system │ Role/system:controller:bootstrap-signer                            │    │   │ 1 │   │   │
│ kube-system │ Role/system:controller:cloud-provider                              │    │   │ 1 │   │   │
│ kube-system │ Role/eks:fargate-manager                                           │ 1  │   │ 2 │   │   │
│ kube-system │ Role/system::leader-locking-kube-controller-manager                │    │   │ 1 │   │   │
│ kube-system │ Role/eks:service-operations-configmaps                             │ 1  │   │ 1 │   │   │
│ kube-system │ Role/autoscaler-aws-cluster-autoscaler                             │    │   │ 2 │   │   │
│ kube-system │ Role/aws-load-balancer-controller-leader-election-role             │    │   │ 2 │   │   │
│ kube-system │ Role/eks:certificate-controller                                    │    │   │ 1 │   │   │
│ kube-system │ Role/system:controller:token-cleaner                               │    │   │ 1 │   │   │
│ kube-system │ Role/system::leader-locking-kube-scheduler                         │    │   │ 1 │   │   │
│ kube-public │ Role/system:controller:bootstrap-signer                            │    │   │ 1 │   │   │
│             │ ClusterRole/system:controller:replicaset-controller                │    │   │ 2 │   │   │
│             │ ClusterRole/aws-load-balancer-controller-role                      │    │ 1 │   │   │   │
│             │ ClusterRole/system:controller:horizontal-pod-autoscaler            │ 2  │   │   │   │   │
│             │ ClusterRole/system:controller:endpoint-controller                  │    │ 1 │   │   │   │
│             │ ClusterRole/eks:cloud-controller-manager                           │    │ 2 │   │   │   │
│             │ ClusterRole/system:controller:legacy-service-account-token-cleaner │ 1  │   │   │   │   │
│             │ ClusterRole/system:controller:cronjob-controller                   │    │   │ 3 │   │   │
│             │ ClusterRole/system:controller:endpointslice-controller             │    │ 1 │   │   │   │
│             │ ClusterRole/system:controller:persistent-volume-binder             │ 1  │ 2 │ 1 │   │   │
│             │ ClusterRole/system:controller:replication-controller               │    │   │ 2 │   │   │
│             │ ClusterRole/vpc-resource-controller-role                           │    │   │ 1 │   │   │
│             │ ClusterRole/system:controller:expand-controller                    │ 1  │   │   │   │   │
│             │ ClusterRole/system:controller:pod-garbage-collector                │    │   │ 1 │   │   │
│             │ ClusterRole/system:node                                            │ 1  │   │ 1 │   │   │
│             │ ClusterRoleBinding/cluster-admin                                   │    │   │ 1 │   │   │
│             │ ClusterRole/system:kube-controller-manager                         │ 5  │   │   │   │   │
│             │ ClusterRole/system:kube-scheduler                                  │    │   │ 1 │   │   │
│             │ ClusterRole/system:controller:job-controller                       │    │   │ 2 │   │   │
│             │ ClusterRoleBinding/eks:addon-cluster-admin                         │    │   │ 1 │   │   │
│             │ ClusterRole/eks:addon-manager                                      │ 2  │   │   │   │   │
│             │ ClusterRole/eks:cloudwatch-agent-role                              │    │ 1 │   │   │   │
│             │ ClusterRole/eks:node-manager                                       │    │   │ 1 │   │   │
│             │ ClusterRole/eks:service-operations                                 │ 17 │   │   │   │   │
│             │ ClusterRole/system:controller:namespace-controller                 │ 1  │   │   │   │   │
│             │ ClusterRole/fluent-bit-role                                        │    │ 1 │   │   │   │
│             │ ClusterRole/eks:fargate-scheduler                                  │    │   │ 2 │   │   │
│             │ ClusterRole/eks:az-poller                                          │    │ 2 │   │   │   │
│             │ ClusterRole/system:controller:ttl-after-finished-controller        │    │   │ 1 │   │   │
│             │ ClusterRole/system:controller:generic-garbage-collector            │ 1  │   │   │   │   │
│             │ ClusterRole/eks:network-policy-controller                          │    │ 1 │   │   │   │
│             │ ClusterRole/system:controller:daemon-set-controller                │    │   │ 1 │   │   │
│             │ ClusterRole/edit                                                   │ 2  │ 4 │ 6 │   │   │
│             │ ClusterRole/system:aggregate-to-admin                              │ 1  │   │   │   │   │
│             │ ClusterRole/system:controller:endpointslicemirroring-controller    │    │ 1 │   │   │   │
│             │ ClusterRole/autoscaler-aws-cluster-autoscaler                      │    │ 2 │ 1 │   │   │
│             │ ClusterRole/system:controller:node-controller                      │    │   │ 1 │   │   │
│             │ ClusterRole/admin                                                  │ 3  │ 4 │ 6 │   │   │
│             │ ClusterRole/system:controller:deployment-controller                │    │   │ 3 │   │   │
│             │ ClusterRole/system:aggregate-to-edit                               │ 2  │ 4 │ 6 │   │   │
│             │ ClusterRole/system:controller:root-ca-cert-publisher               │    │   │ 1 │   │   │
│             │ ClusterRole/cluster-admin                                          │ 2  │   │   │   │   │
│             │ ClusterRole/eks:fargate-manager                                    │    │   │ 1 │   │   │
│             │ ClusterRole/system:controller:statefulset-controller               │    │   │ 1 │   │   │
│             │ ClusterRole/system:controller:resourcequota-controller             │ 1  │   │   │   │   │
└─────────────┴────────────────────────────────────────────────────────────────────┴────┴───┴───┴───┴───┘
Severities: C=CRITICAL H=HIGH M=MEDIUM L=LOW U=UNKNOWN

  ~/c/j/webapp   draft wip *1 !4 ?3 ❯                                                                                                      3m 53s  base

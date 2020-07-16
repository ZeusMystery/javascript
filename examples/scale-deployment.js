const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.AppsV1Api);

const targetDeploymentName = 'docker-test-deployment';

async function scale(namespace, name, replicas) {
  // find the particular deployment
  const res = await k8sApi.readNamespacedDeployment(name, namespace);
  let deployment = res.body;

  // edit
  deployment.spec.replicas = replicas;

  // replace
  await k8sApi.replaceNamespacedDeployment(name, namespace, deployment);
}

scale('default', 'docker-test-deployment', 3);

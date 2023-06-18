// in a real program use require('@kubernetes/client-node')
const k8s = require('../dist/index');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
const metricsClient = new k8s.Metrics(kc);

const namespace = 'kube-system';

k8s.topPods(k8sApi, metricsClient, namespace).then((pods) => {
    const podsColumns = pods.map((pod) => {
        return {
            POD: pod.Pod.metadata?.name,
            'CPU(cores)': pod.CPU.CurrentUsage,
            'MEMORY(bytes)': pod.Memory.CurrentUsage,
        };
    });
    console.log('TOP PODS');
    console.table(podsColumns);
});

k8s.topPods(k8sApi, metricsClient, namespace).then((pods) => {
    const podsAndContainersColumns = pods.flatMap((pod) => {
        return pod.Containers.map((containerUsage) => {
            return {
                POD: pod.Pod.metadata?.name,
                NAME: containerUsage.Container,
                'CPU(cores)': containerUsage.CPUUsage.CurrentUsage,
                'MEMORY(bytes)': containerUsage.MemoryUsage.CurrentUsage,
            };
        });
    });

    console.log('TOP CONTAINERS');
    console.table(podsAndContainersColumns);
});

import * as metav1 from '../../meta/v1';

/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 */
export interface Deployment {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion: 'apps/v1';

  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind: 'Deployment';

  /**
   * Standard object's metadata.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata: metav1.ObjectMeta;

  /**
   * Specification of the desired behavior of the Deployment.
   */
  spec?: DeploymentSpec;

  /**
   * Most recently observed status of the Deployment.
   */
  status?: DeploymentStatus;
}

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 */
export interface DeploymentSpec {
  /**
   * Number of desired pods. This is a pointer to distinguish between explicit
   * zero and not specified. Defaults to 1.
   */
  replicas?: number;

  /**
   * Label selector for pods. Existing ReplicaSets whose pods are
   * selected by this will be the ones affected by this deployment.
   * It must match the pod template's labels.
   */
  selector: LabelSelector;

  /**
   * Template describes the pods that will be created.
   * The only allowed template.spec.restartPolicy value is "Always".
   */
  template: PodTemplateSpec;

  /**
   * The deployment strategy to use to replace existing pods with new ones.
   */
  strategy?: DeploymentStrategy;

  /**
   * Minimum number of seconds for which a newly created pod should be ready
   * without any of its container crashing, for it to be considered available.
   * Defaults to 0 (pod will be considered available as soon as it is ready)
   */
  minReadySeconds?: number;

  /**
   * The number of old ReplicaSets to retain to allow rollback.
   * This is a pointer to distinguish between explicit zero and not specified.
   * Defaults to 10.
   */
  revisionHistoryLimit?: number;

  /**
   * Indicates that the deployment is paused.
   */
  paused?: boolean;

  /**
   * The maximum time in seconds for a deployment to make progress before it
   * is considered to be failed. The deployment controller will continue to
   * process failed deployments and a condition with a ProgressDeadlineExceeded
   * reason will be surfaced in the deployment status. Note that progress will
   * not be estimated during the time a deployment is paused. Defaults to 600s.
   */
  progressDeadlineSeconds?: number;
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export interface DeploymentStrategy {
  /**
   * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
   */
  type?: DeploymentStrategyType;

  /**
   * Rolling update config params. Present only if DeploymentStrategyType =
   * RollingUpdate.
   */
  rollingUpdate?: RollingUpdateDeployment;
}

/**
 * DeploymentStrategyType defines strategies for deployment.
 */
export type DeploymentStrategyType = 'Recreate' | 'RollingUpdate';

/**
 * Spec to control the desired behavior of rolling update.
 */
export interface RollingUpdateDeployment {
  /**
   * The maximum number of pods that can be unavailable during the update.
   * Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%).
   * Absolute number is calculated from percentage by rounding down.
   * This can not be 0 if MaxSurge is 0.
   * Defaults to 25%.
   * Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods
   * immediately when the rolling update starts. Once new pods are ready, old ReplicaSet
   * can be scaled down further, followed by scaling up the new ReplicaSet, ensuring
   * that the total number of pods available at all times during the update is at
   * least 70% of desired pods.
   */
  maxUnavailable?: number | string;

  /**
   * The maximum number of pods that can be scheduled above the desired number of
   * pods.
   * Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%).
   * This can not be 0 if MaxUnavailable is 0.
   * Absolute number is calculated from percentage by rounding up.
   * Defaults to 25%.
   * Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when
   * the rolling update starts, such that the total number of old and new pods do not exceed
   * 130% of desired pods. Once old pods have been killed,
   * new ReplicaSet can be scaled up further, ensuring that total number of pods running
   * at any time during the update is at most 130% of desired pods.
   */
  maxSurge?: number | string;
}

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export interface DeploymentStatus {
  /**
   * The generation observed by the deployment controller.
   */
  observedGeneration?: number;

  /**
   * Total number of non-terminated pods targeted by this deployment (their labels match the selector).
   */
  replicas?: number;

  /**
   * Total number of non-terminated pods targeted by this deployment that have the desired template spec.
   */
  updatedReplicas?: number;

  /**
   * readyReplicas is the number of pods targeted by this Deployment with a Ready Condition.
   */
  readyReplicas?: number;

  /**
   * Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
   */
  availableReplicas?: number;

  /**
   * Total number of unavailable pods targeted by this Deployment. This is the total number of
   * pods that are still required for the deployment to have 100% available capacity. They may
   * either be pods that are running but not yet available or pods that still have not been created.
   */
  unavailableReplicas?: number;

  /**
   * Represents the latest available observations of a deployment's current state.
   */
  conditions?: DeploymentCondition[];

  /**
   * Count of hash collisions for the Deployment. The Deployment controller uses this
   * field as a collision avoidance mechanism when it needs to create the name for the
   * newest ReplicaSet.
   */
  collisionCount?: number;
}

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export interface DeploymentCondition {
  /**
   * Type of deployment condition.
   */
  type: DeploymentConditionType;

  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: ConditionStatus;

  /**
   * The last time this condition was updated.
   */
  lastUpdateTime?: string;

  /**
   * Last time the condition transitioned from one status to another.
   */
  lastTransitionTime?: string;

  /**
   * The reason for the condition's last transition.
   */
  reason?: string;

  /**
   * A human readable message indicating details about the transition.
   */
  message?: string;
}

/**
 * DeploymentConditionType defines the conditions of deployment.
 */
export type DeploymentConditionType =
  | 'Available'
  | 'Progressing'
  | 'ReplicaFailure';

/**
 * ConditionStatus defines conditions of resources
 */
export type ConditionStatus = 'True' | 'False' | 'Unknown';

/**
 * LabelSelector is a label query over a set of resources. The result of matchLabels and
 * matchExpressions are ANDed. An empty label selector matches all objects. A null
 * label selector matches no objects.
 */
export interface LabelSelector {
  /**
   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
   * map is equivalent to an element of matchExpressions, whose key field is "key", the
   * operator is "In", and the values array contains only "value". The requirements are ANDed.
   */
  matchLabels?: { [key: string]: string };

  /**
   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
   */
  matchExpressions?: LabelSelectorRequirement[];
}

/**
 * A label selector requirement is a selector that contains values, a key, and an operator that
 * relates the key and values.
 */
export interface LabelSelectorRequirement {
  /**
   * key is the label key that the selector applies to.
   */
  key: string;

  /**
   * operator represents a key's relationship to a set of values.
   * Valid operators are In, NotIn, Exists and DoesNotExist.
   */
  operator: string;

  /**
   * values is an array of string values. If the operator is In or NotIn,
   * the values array must be non-empty. If the operator is Exists or DoesNotExist,
   * the values array must be empty. This array is replaced during a strategic
   * merge patch.
   */
  values?: string[];
}

/**
 * PodTemplateSpec describes the data a pod should have when created from a template
 */
export interface PodTemplateSpec {
  /**
   * Standard object's metadata.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  metadata?: metav1.ObjectMeta;

  /**
   * Specification of the desired behavior of the pod.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   */
  spec?: PodSpec;
}

/**
 * PodSpec is a description of a pod.
 */
export interface PodSpec {
  /**
   * List of volumes that can be mounted by containers belonging to the pod.
   * More info: https://kubernetes.io/docs/concepts/storage/volumes
   */
  volumes?: Volume[];

  /**
   * List of initialization containers belonging to the pod.
   * Init containers are executed in order prior to containers being started. If any
   * init container fails, the pod is considered to have failed and is handled according
   * to its restartPolicy. The name for an init container or normal container must be
   * unique among all containers.
   * Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes.
   * The resourceRequirements of an init container are taken into account during scheduling
   * by finding the highest request/limit for each resource type, and then using the max of
   * that value or the sum of the normal containers. Limits are applied to init containers
   * in a similar fashion.
   * Init containers cannot currently be added or removed.
   * Cannot be updated.
   * More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
   */
  initContainers?: Container[];

  /**
   * List of containers belonging to the pod.
   * Containers cannot currently be added or removed.
   * There must be at least one container in a Pod.
   * Cannot be updated.
   */
  containers: Container[];

  /**
   * List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing
   * pod to perform user-initiated actions such as debugging. This list cannot be specified when
   * creating a pod, and it cannot be modified by updating the pod spec. In order to add an
   * ephemeral container to an existing pod, use the pod's ephemeralcontainers subresource.
   */
  ephemeralContainers?: EphemeralContainer[];

  /**
   * Restart policy for all containers within the pod.
   * One of Always, OnFailure, Never. In some contexts, only a subset of those values may be permitted.
   * Default to Always.
   * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy
   */
  restartPolicy?: string;

  /**
   * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request.
   * Value must be non-negative integer. The value zero indicates stop immediately via
   * the kill signal (no opportunity to shut down).
   * If this value is nil, the default grace period will be used instead.
   * The grace period is the duration in seconds after the processes running in the pod are sent
   * a termination signal and the time when the processes are forcibly halted with a kill signal.
   * Set this value longer than the expected cleanup time for your process.
   * Defaults to 30 seconds.
   */
  terminationGracePeriodSeconds?: number;

  /**
   * Optional duration in seconds the pod may be active on the node relative to
   * StartTime before the system will actively try to mark it failed and kill associated containers.
   * Value must be a positive integer.
   */
  activeDeadlineSeconds?: number;

  /**
   * Set DNS policy for the pod.
   * Defaults to "ClusterFirst".
   * Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'.
   * DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy.
   * To have DNS options set along with hostNetwork, you have to specify DNS policy
   * explicitly to 'ClusterFirstWithHostNet'.
   */
  dnsPolicy?: string;

  /**
   * NodeSelector is a selector which must be true for the pod to fit on a node.
   * Selector which must match a node's labels for the pod to be scheduled on that node.
   * More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
   */
  nodeSelector?: { [key: string]: string };

  /**
   * ServiceAccountName is the name of the ServiceAccount to use to run this pod.
   * More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
   */
  serviceAccountName?: string;

  /**
   * DeprecatedServiceAccount is a depreciated alias for ServiceAccountName.
   * Deprecated: Use serviceAccountName instead.
   */
  serviceAccount?: string;

  /**
   * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
   */
  automountServiceAccountToken?: boolean;

  /**
   * NodeName is a request to schedule this pod onto a specific node. If it is non-empty,
   * the scheduler simply schedules this pod onto that node, assuming that it fits resource
   * requirements.
   */
  nodeName?: string;

  /**
   * Host networking requested for this pod. Use the host's network namespace.
   * If this option is set, the ports that will be used must be specified.
   * Default to false.
   */
  hostNetwork?: boolean;

  /**
   * Use the host's pid namespace.
   * Optional: Default to false.
   */
  hostPID?: boolean;

  /**
   * Use the host's ipc namespace.
   * Optional: Default to false.
   */
  hostIPC?: boolean;

  /**
   * Share a single process namespace between all of the containers in a pod.
   * When this is set containers will be able to view and signal processes from other containers
   * in the same pod, and the first process in each container will not be assigned PID 1.
   * HostPID and ShareProcessNamespace cannot both be set.
   * Optional: Default to false.
   */
  shareProcessNamespace?: boolean;

  /**
   * SecurityContext holds pod-level security attributes and common container settings.
   * Optional: Defaults to empty.  See type description for default values of each field.
   */
  securityContext?: PodSecurityContext;

  /**
   * ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec.
   * If specified, these secrets will be passed to individual puller implementations for them to use.
   * More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
   */
  imagePullSecrets?: LocalObjectReference[];

  /**
   * Specifies the hostname of the Pod
   * If not specified, the pod's hostname will be set to a system-defined value.
   */
  hostname?: string;

  /**
   * If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>".
   * If not specified, the pod will not have a domainname at all.
   */
  subdomain?: string;

  /**
   * If specified, the pod's scheduling constraints
   */
  affinity?: Affinity;

  /**
   * If specified, the pod will be dispatched by specified scheduler.
   * If not specified, the pod will be dispatched by default scheduler.
   */
  schedulerName?: string;

  /**
   * If specified, the pod's tolerations.
   */
  tolerations?: Toleration[];

  /**
   * HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts
   * file if specified. This is only valid for non-hostNetwork pods.
   */
  hostAliases?: HostAlias[];

  /**
   * If specified, indicates the pod's priority. "system-node-critical" and
   * "system-cluster-critical" are two special keywords which indicate the
   * highest priorities with the former being the highest priority. Any other
   * name must be defined by creating a PriorityClass object with that name.
   * If not specified, the pod priority will be default or zero if there is no
   * default.
   */
  priorityClassName?: string;

  /**
   * The priority value. Various system components use this field to find the
   * priority of the pod. When Priority Admission Controller is enabled, it
   * prevents users from setting this field. The admission controller populates
   * this field from PriorityClassName.
   * The higher the value, the higher the priority.
   */
  priority?: number;

  /**
   * Specifies the DNS parameters of a pod.
   * Parameters specified here will be merged to the generated DNS
   * configuration based on DNSPolicy.
   */
  dnsConfig?: PodDNSConfig;

  /**
   * If specified, all readiness gates will be evaluated for pod readiness.
   * A pod is ready when all its containers are ready AND
   * all conditions specified in the readiness gates have status equal to "True"
   * More info: https://git.k8s.io/enhancements/keps/sig-network/580-pod-readiness-gates
   */
  readinessGates?: PodReadinessGate[];

  /**
   * RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used
   * to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run.
   * If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an
   * empty definition that uses the default runtime handler.
   * More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class
   */
  runtimeClassName?: string;

  /**
   * EnableServiceLinks indicates whether information about services should be injected into pod's
   * environment variables, matching the syntax of Docker links.
   * Optional: Defaults to true.
   */
  enableServiceLinks?: boolean;

  /**
   * PreemptionPolicy is the Policy for preempting pods with lower priority.
   * One of Never, PreemptLowerPriority.
   * Defaults to PreemptLowerPriority if unset.
   */
  preemptionPolicy?: string;

  /**
   * Overhead represents the resource overhead associated with running a pod for a given RuntimeClass.
   * This field will be autopopulated at admission time by the RuntimeClass admission controller. If
   * the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests.
   * The RuntimeClass admission controller will reject Pod create requests which have the overhead already
   * set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value
   * defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero.
   * More info: https://git.k8s.io/enhancements/keps/sig-node/688-pod-overhead/README.md
   */
  overhead?: { [key: string]: string };

  /**
   * TopologySpreadConstraints describes how a group of pods ought to spread across topology
   * domains. Scheduler will schedule pods in a way which abides by the constraints.
   * All topologySpreadConstraints are ANDed.
   */
  topologySpreadConstraints?: TopologySpreadConstraint[];

  /**
   * If true the pod's hostname will be configured as the pod's FQDN, rather than the leaf name (the default).
   * In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname).
   * In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters to FQDN.
   * If a pod does not have FQDN, this has no effect.
   * Default to false.
   */
  setHostnameAsFQDN?: boolean;

  /**
   * Specifies the OS of the containers in the pod.
   * Some pod and container fields are restricted if this is set.
   */
  os?: PodOS;

  /**
   * Use the host's user namespace.
   * Optional: Default to true.
   * If set to true or not present, the pod will be run in the host user namespace, useful
   * for when the pod needs a feature only available to the host user namespace, such as
   * loading a kernel module with CAP_SYS_MODULE.
   * When set to false, a new userns is created for the pod. Setting false is useful for
   * mitigating container breakout vulnerabilities even allowing users to run their
   * containers as root without actually having root privileges on the host.
   */
  hostUsers?: boolean;

  /**
   * SchedulingGates is an opaque list of values that if specified will block scheduling the pod.
   * If schedulingGates is not empty, the pod will stay in the SchedulingGated state and the
   * scheduler will not attempt to schedule the pod.
   */
  schedulingGates?: PodSchedulingGate[];

  /**
   * ResourceClaims defines which ResourceClaims must be allocated
   * and reserved before the Pod is allowed to start. The resources
   * will be made available to those containers which consume them
   * by name.
   */
  resourceClaims?: PodResourceClaim[];
}

/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 */
export interface Volume {
  /**
   * name of the volume.
   * Must be a DNS_LABEL and unique within the pod.
   * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name: string;

  /**
   * volumeSource represents the location and type of the mounted volume.
   * If not specified, the Volume is implied to be an EmptyDir.
   * This implied behavior is deprecated and will be removed in a future version.
   */
  [key: string]: any;
}

/**
 * A single application container that you want to run within a pod.
 */
export interface Container {
  /**
   * Name of the container specified as a DNS_LABEL.
   * Each container in a pod must have a unique name (DNS_LABEL).
   * Cannot be updated.
   */
  name: string;

  /**
   * Container image name.
   * More info: https://kubernetes.io/docs/concepts/containers/images
   */
  image?: string;

  /**
   * Entrypoint array. Not executed within a shell.
   * The container image's ENTRYPOINT is used if this is not provided.
   * Variable references $(VAR_NAME) are expanded using the container's environment. If a variable
   * cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
   * to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will
   * produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless
   * of whether the variable exists or not. Cannot be updated.
   * More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
   */
  command?: string[];

  /**
   * Arguments to the entrypoint.
   * The container image's CMD is used if this is not provided.
   * Variable references $(VAR_NAME) are expanded using the container's environment. If a variable
   * cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
   * to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will
   * produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless
   * of whether the variable exists or not. Cannot be updated.
   * More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
   */
  args?: string[];

  /**
   * Container's working directory.
   * If not specified, the container runtime's default will be used, which
   * might be configured in the container image.
   * Cannot be updated.
   */
  workingDir?: string;

  /**
   * List of ports to expose from the container.
   * Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is
   * listening on the default "0.0.0.0" address inside a container will be accessible from the
   * network.
   * Modifying this array with strategic merge patch may corrupt the data.
   * For more information See https://github.com/kubernetes/kubernetes/issues/108255.
   * Cannot be updated.
   */
  ports?: ContainerPort[];

  /**
   * List of sources to populate environment variables in the container.
   * The keys defined within a source must be a C_IDENTIFIER. All invalid keys
   * will be reported as an event when the container is starting. When a key exists in multiple
   * sources, the value associated with the last source will take precedence.
   * Values defined by an Env with a duplicate key will take precedence.
   * Cannot be updated.
   */
  envFrom?: EnvFromSource[];

  /**
   * List of environment variables to set in the container.
   * Cannot be updated.
   */
  env?: EnvVar[];

  /**
   * Compute Resources required by this container.
   * Cannot be updated.
   * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
   */
  resources?: ResourceRequirements;

  /**
   * Lifecycle is not allowed for ephemeral containers.
   */
  resizePolicy?: ContainerResizePolicy[];

  /**
   * RestartPolicy defines the restart behavior of individual containers in a pod.
   * This field may only be set for init containers, and the only allowed value is "Always".
   * For non-init containers or when this field is not specified,
   * the restart behavior is defined by the Pod's restart policy and the container type.
   * Setting the RestartPolicy as "Always" for the init container will have the following effect:
   * this init container will be continually restarted on
   * exit until all regular containers have terminated. Once all regular
   * containers have completed, all init containers with restartPolicy "Always"
   * will be shut down. This lifecycle differs from normal init containers and
   * is often referred to as a "sidecar" container. Although this init
   * container still starts in the init container sequence, it does not wait
   * for the container to complete before proceeding to the next init
   * container. Instead, the next init container starts immediately after this
   * init container is started, or after any startupProbe has successfully
   * completed.
   */
  restartPolicy?: string;

  /**
   * Pod volumes to mount into the container's filesystem.
   * Cannot be updated.
   */
  volumeMounts?: VolumeMount[];

  /**
   * volumeDevices is the list of block devices to be used by the container.
   */
  volumeDevices?: VolumeDevice[];

  /**
   * Periodic probe of container liveness.
   * Container will be restarted if the probe fails.
   * Cannot be updated.
   * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   */
  livenessProbe?: Probe;

  /**
   * Periodic probe of container service readiness.
   * Container will be removed from service endpoints if the probe fails.
   * Cannot be updated.
   * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   */
  readinessProbe?: Probe;

  /**
   * StartupProbe indicates that the Pod has successfully initialized.
   * If specified, no other probes are executed until this completes successfully.
   * If this probe fails, the Pod will be restarted, just as if the livenessProbe failed.
   * This can be used to provide different probe parameters at the beginning of a Pod's lifecycle,
   * when it might take a long time to load data or warm a cache, than during steady-state operation.
   * This cannot be updated.
   * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   */
  startupProbe?: Probe;

  /**
   * Actions that the management system should take in response to container lifecycle events.
   * Cannot be updated.
   */
  lifecycle?: Lifecycle;

  /**
   * Optional: Path at which the file to which the container's termination message
   * will be written is mounted into the container's filesystem.
   * Message written is intended to be brief final status, such as an assertion failure message.
   * Will be truncated by the node if greater than 4096 bytes. The total message length across
   * all containers will be limited to 12kb.
   * Defaults to /dev/termination-log.
   * Cannot be updated.
   */
  terminationMessagePath?: string;

  /**
   * Indicate how the termination message should be populated. File will use the contents of
   * terminationMessagePath to populate the container status message on both success and failure.
   * FallbackToLogsOnError will use the last chunk of container log output if the termination
   * message file is empty and the container exited with an error.
   * The log output is limited to 2048 bytes or 80 lines, whichever is smaller.
   * Defaults to File.
   * Cannot be updated.
   */
  terminationMessagePolicy?: string;

  /**
   * Image pull policy.
   * One of Always, Never, IfNotPresent.
   * Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
   * Cannot be updated.
   * More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
   */
  imagePullPolicy?: string;

  /**
   * SecurityContext defines the security options the container should be run with.
   * If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.
   * More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
   */
  securityContext?: SecurityContext;

  /**
   * Whether this container should allocate a buffer for stdin in the container runtime. If this
   * is not set, reads from stdin in the container will always result in EOF.
   * Default is false.
   */
  stdin?: boolean;

  /**
   * Whether the container runtime should close the stdin channel after it has been opened by
   * a single attach. When stdin is true the stdin stream will remain open across multiple attach
   * sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the
   * first client attaches to stdin, and then remains open and accepts data until the client disconnects,
   * at which time stdin is closed and remains closed until the container is restarted. If this
   * flag is false, a container processes that reads from stdin will never receive an EOF.
   * Default is false
   */
  stdinOnce?: boolean;

  /**
   * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true.
   * Default is false.
   */
  tty?: boolean;
}

/**
 * An EphemeralContainer is a temporary container that you may add to an existing Pod for
 * user-initiated activities such as debugging. Ephemeral containers have no resource or
 * scheduling guarantees, and they will not be restarted when they exit or when a Pod is
 * removed or restarted. The kubelet may evict a Pod if an ephemeral container causes the
 * Pod to exceed its resource allocation.
 */
export interface EphemeralContainer extends Container {
  /**
   * If set, the name of the container from PodSpec that this ephemeral container targets.
   * The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container.
   * If not set then the ephemeral container uses the namespaces configured in the Pod spec.
   */
  targetContainerName?: string;
}

/**
 * ContainerPort represents a network port in a single container.
 */
export interface ContainerPort {
  /**
   * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each
   * named port in a pod must have a unique name. Name for the port that can be
   * referred to by services.
   */
  name?: string;

  /**
   * Number of port to expose on the host.
   * If specified, this must be a valid port number, 0 < x < 65536.
   * If HostNetwork is specified, this must match ContainerPort.
   * Most containers do not need this.
   */
  hostPort?: number;

  /**
   * Number of port to expose on the pod's IP address.
   * This must be a valid port number, 0 < x < 65536.
   */
  containerPort: number;

  /**
   * Protocol for port. Must be UDP, TCP, or SCTP.
   * Defaults to "TCP".
   */
  protocol?: string;

  /**
   * What host IP to bind the external port to.
   */
  hostIP?: string;
}

/**
 * EnvFromSource represents the source of a set of ConfigMaps
 */
export interface EnvFromSource {
  /**
   * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
   */
  prefix?: string;

  /**
   * The ConfigMap to select from
   */
  configMapRef?: ConfigMapEnvSource;

  /**
   * The Secret to select from
   */
  secretRef?: SecretEnvSource;
}

/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment
 * variables with.
 */
export interface ConfigMapEnvSource {
  /**
   * Name of the referent.
   * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string;

  /**
   * Specify whether the ConfigMap must be defined
   */
  optional?: boolean;
}

/**
 * SecretEnvSource selects a Secret to populate the environment
 * variables with.
 */
export interface SecretEnvSource {
  /**
   * Name of the referent.
   * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string;

  /**
   * Specify whether the Secret must be defined
   */
  optional?: boolean;
}

/**
 * EnvVar represents an environment variable present in a Container.
 */
export interface EnvVar {
  /**
   * Name of the environment variable. Must be a C_IDENTIFIER.
   */
  name: string;

  /**
   * Variable references $(VAR_NAME) are expanded
   * using the previously defined environment variables in the container and
   * any service environment variables. If a variable cannot be resolved,
   * the reference in the input string will be unchanged. Double $$ are reduced
   * to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e.
   * "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)".
   * Escaped references will never be expanded, regardless of whether the variable
   * exists or not.
   * Defaults to "".
   */
  value?: string;

  /**
   * Source for the environment variable's value. Cannot be used if value is not empty.
   */
  valueFrom?: EnvVarSource;
}

/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
export interface EnvVarSource {
  /**
   * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`,
   * spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
   */
  fieldRef?: ObjectFieldSelector;

  /**
   * Selects a resource of the container: only resources limits and requests
   * (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
   */
  resourceFieldRef?: ResourceFieldSelector;

  /**
   * Selects a key of a ConfigMap.
   */
  configMapKeyRef?: ConfigMapKeySelector;

  /**
   * Selects a key of a secret in the pod's namespace
   */
  secretKeyRef?: SecretKeySelector;
}

/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 */
export interface ObjectFieldSelector {
  /**
   * Version of the schema the FieldPath is written in terms of, defaults to "v1".
   */
  apiVersion?: string;

  /**
   * Path of the field to select in the specified API version.
   */
  fieldPath: string;
}

/**
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 */
export interface ResourceFieldSelector {
  /**
   * Container name: required for volumes, optional for env vars
   */
  containerName?: string;

  /**
   * Required: resource to select
   */
  resource: string;

  /**
   * Specifies the output format of the exposed resources, defaults to "1"
   */
  divisor?: string;
}

/**
 * Selects a key from a ConfigMap.
 */
export interface ConfigMapKeySelector {
  /**
   * Name of the referent.
   * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string;

  /**
   * The key to select.
   */
  key: string;

  /**
   * Specify whether the ConfigMap or its key must be defined
   */
  optional?: boolean;
}

/**
 * SecretKeySelector selects a key of a Secret.
 */
export interface SecretKeySelector {
  /**
   * Name of the referent.
   * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string;

  /**
   * The key of the secret to select from.  Must be a valid secret key.
   */
  key: string;

  /**
   * Specify whether the Secret or its key must be defined
   */
  optional?: boolean;
}

/**
 * ResourceRequirements describes the compute resource requirements.
 */
export interface ResourceRequirements {
  /**
   * Limits describes the maximum amount of compute resources allowed.
   * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
   */
  limits?: { [key: string]: string };

  /**
   * Requests describes the minimum amount of compute resources required.
   * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
   * otherwise to an implementation-defined value. Requests cannot exceed Limits.
   * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
   */
  requests?: { [key: string]: string };

  /**
   * Claims lists the names of resources, defined in spec.resourceClaims,
   * that are used by this container.
   */
  claims?: ResourceClaim[];
}

/**
 * ResourceClaim references one entry in PodSpec.ResourceClaims.
 */
export interface ResourceClaim {
  /**
   * Name must match the name of one entry in pod.spec.resourceClaims of
   * the Pod where this field is used. It makes that resource available
   * inside a container.
   */
  name: string;
}

/**
 * ContainerResizePolicy represents resource resize policy for the container.
 */
export interface ContainerResizePolicy {
  /**
   * Name of the resource to which this resource resize policy applies.
   * Supported values: cpu, memory.
   */
  resourceName: string;

  /**
   * Restart policy to apply when specified resource is resized.
   * If not specified, it defaults to NotRequired.
   */
  restartPolicy: string;
}

/**
 * VolumeMount describes a mounting of a Volume within a container.
 */
export interface VolumeMount {
  /**
   * This must match the Name of a Volume.
   */
  name: string;

  /**
   * Mounted read-only if true, read-write otherwise (false or unspecified).
   * Defaults to false.
   */
  readOnly?: boolean;

  /**
   * Path within the container at which the volume should be mounted.  Must
   * not contain ':'.
   */
  mountPath: string;

  /**
   * Path within the volume from which the container's volume should be mounted.
   * Defaults to "" (volume's root).
   */
  subPath?: string;

  /**
   * mountPropagation determines how mounts are propagated from the host
   * to container and the other way around.
   * When not set, MountPropagationNone is used.
   * This field is beta in 1.10.
   */
  mountPropagation?: string;

  /**
   * Expanded path within the volume from which the container's volume should be mounted.
   * Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment.
   * Defaults to "" (volume's root).
   * SubPathExpr and SubPath are mutually exclusive.
   */
  subPathExpr?: string;
}

/**
 * volumeDevice describes a mapping of a raw block device within a container.
 */
export interface VolumeDevice {
  /**
   * name must match the name of a persistentVolumeClaim in the pod
   */
  name: string;

  /**
   * devicePath is the path inside of the container that the device will be mapped to.
   */
  devicePath: string;
}

/**
 * Probe describes a health check to be performed against a container to determine whether it is
 * alive or ready to receive traffic.
 */
export interface Probe {
  /**
   * The action taken to determine the health of a container
   */
  exec?: ExecAction;

  /**
   * HTTPGet specifies the http request to perform.
   */
  httpGet?: HTTPGetAction;

  /**
   * TCPSocket specifies an action involving a TCP port.
   */
  tcpSocket?: TCPSocketAction;

  /**
   * GRPC specifies an action involving a GRPC port.
   */
  grpc?: GRPCAction;

  /**
   * Number of seconds after the container has started before liveness probes are initiated.
   * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   */
  initialDelaySeconds?: number;

  /**
   * Number of seconds after which the probe times out.
   * Defaults to 1 second. Minimum value is 1.
   * More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
   */
  timeoutSeconds?: number;

  /**
   * How often (in seconds) to perform the probe.
   * Default to 10 seconds. Minimum value is 1.
   */
  periodSeconds?: number;

  /**
   * Minimum consecutive successes for the probe to be considered successful after having failed.
   * Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
   */
  successThreshold?: number;

  /**
   * Minimum consecutive failures for the probe to be considered failed after having succeeded.
   * Defaults to 3. Minimum value is 1.
   */
  failureThreshold?: number;

  /**
   * Optional duration in seconds the pod needs to terminate gracefully upon probe failure.
   */
  terminationGracePeriodSeconds?: number;
}

/**
 * ExecAction describes a "run in container" action.
 */
export interface ExecAction {
  /**
   * Command is the command line to execute inside the container, the working directory for the
   * command  is root ('/') in the container's filesystem. The command is simply exec'd, it is
   * not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use
   * a shell, you need to explicitly call out to that shell.
   * Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
   */
  command?: string[];
}

/**
 * HTTPGetAction describes an action based on HTTP Get requests.
 */
export interface HTTPGetAction {
  /**
   * Path to access on the HTTP server.
   */
  path?: string;

  /**
   * Name or number of the port to access on the container.
   * Number must be in the range 1 to 65535.
   * Name must be an IANA_SVC_NAME.
   */
  port: number | string;

  /**
   * Host name to connect to, defaults to the pod IP. You probably want to set
   * "Host" in httpHeaders instead.
   */
  host?: string;

  /**
   * Scheme to use for connecting to the host.
   * Defaults to HTTP.
   */
  scheme?: string;

  /**
   * Custom headers to set in the request. HTTP allows repeated headers.
   */
  httpHeaders?: HTTPHeader[];
}

/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
export interface HTTPHeader {
  /**
   * The header field name.
   * This will be canonicalized upon output, so case-variant names will be understood as the same header.
   */
  name: string;

  /**
   * The header field value
   */
  value: string;
}

/**
 * TCPSocketAction describes an action based on opening a socket
 */
export interface TCPSocketAction {
  /**
   * Number or name of the port to access on the container.
   * Number must be in the range 1 to 65535.
   * Name must be an IANA_SVC_NAME.
   */
  port: number | string;

  /**
   * Optional: Host name to connect to, defaults to the pod IP.
   */
  host?: string;
}

/**
 * GRPCAction describes an action involving a GRPC port.
 */
export interface GRPCAction {
  /**
   * Port number of the gRPC service. Number must be in the range 1 to 65535.
   */
  port: number;

  /**
   * Service is the name of the service to place in the gRPC HealthCheckRequest
   * (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
   */
  service?: string;
}

/**
 * Lifecycle describes actions that the management system should take in response to container lifecycle
 * events. For the PostStart and PreStop lifecycle handlers, management of the container blocks
 * until the action is complete, unless the container process fails, in which case the handler is aborted.
 */
export interface Lifecycle {
  /**
   * PostStart is called immediately after a container is created. If the handler fails,
   * the container is terminated and restarted according to its restart policy.
   * Other management of the container blocks until the hook completes.
   * More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
   */
  postStart?: LifecycleHandler;

  /**
   * PreStop is called immediately before a container is terminated due to an
   * API request or management event such as liveness/startup probe failure,
   * preemption, resource contention, etc. The handler is not called if the
   * container crashes or exits. The Pod's termination grace period countdown begins before the
   * PreStop hook is executed. Regardless of the outcome of the handler, the
   * container will eventually terminate within the Pod's termination grace
   * period (unless delayed by finalizers). Other management of the container blocks until the hook completes
   * or until the termination grace period is reached.
   * More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
   */
  preStop?: LifecycleHandler;
}

/**
 * LifecycleHandler defines a specific action that should be taken in a lifecycle
 * hook. One and only one of the fields, except TCPSocket must be specified.
 */
export interface LifecycleHandler {
  /**
   * Exec specifies the action to take.
   */
  exec?: ExecAction;

  /**
   * HTTPGet specifies the http request to perform.
   */
  httpGet?: HTTPGetAction;

  /**
   * Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept
   * for the backward compatibility. There are no validation of this field and
   * lifecycle hooks will fail in runtime when tcp handler is specified.
   */
  tcpSocket?: TCPSocketAction;

  /**
   * Sleep represents the duration that the container should sleep before being terminated.
   */
  sleep?: SleepAction;
}

/**
 * SleepAction describes a "sleep" action.
 */
export interface SleepAction {
  /**
   * Seconds is the number of seconds to sleep.
   */
  seconds: number;
}

/**
 * SecurityContext holds security configuration that will be applied to a container.
 * Some fields are present in both SecurityContext and PodSecurityContext.  When both
 * are set, the values in SecurityContext take precedence.
 */
export interface SecurityContext {
  /**
   * The capabilities to add/drop when running containers.
   * Defaults to the default set of capabilities granted by the container runtime.
   * Note that this field cannot be set when spec.os.name is windows.
   */
  capabilities?: Capabilities;

  /**
   * Run container in privileged mode.
   * Processes in privileged containers are essentially equivalent to root on the host.
   * Defaults to false.
   * Note that this field cannot be set when spec.os.name is windows.
   */
  privileged?: boolean;

  /**
   * The SELinux context to be applied to the container.
   * If unspecified, the container runtime will allocate a random SELinux context for each
   * container.  May also be set in PodSecurityContext.  If set in both SecurityContext and
   * PodSecurityContext, the value specified in SecurityContext takes precedence.
   * Note that this field cannot be set when spec.os.name is windows.
   */
  seLinuxOptions?: SELinuxOptions;

  /**
   * The Windows specific settings applied to all containers.
   * If unspecified, the options from the PodSecurityContext will be used.
   * If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   * Note that this field cannot be set when spec.os.name is linux.
   */
  windowsOptions?: WindowsSecurityContextOptions;

  /**
   * The UID to run the entrypoint of the container process.
   * Defaults to user specified in image metadata if unspecified.
   * May also be set in PodSecurityContext.  If set in both SecurityContext and
   * PodSecurityContext, the value specified in SecurityContext takes precedence.
   * Note that this field cannot be set when spec.os.name is windows.
   */
  runAsUser?: number;

  /**
   * The GID to run the entrypoint of the container process.
   * Uses runtime default if unset.
   * May also be set in PodSecurityContext.  If set in both SecurityContext and
   * PodSecurityContext, the value specified in SecurityContext takes precedence.
   * Note that this field cannot be set when spec.os.name is windows.
   */
  runAsGroup?: number;

  /**
   * Indicates that the container must run as a non-root user.
   * If true, the Kubelet will validate the image at runtime to ensure that it
   * does not run as UID 0 (root) and fail to start the container if it does.
   * If unset or false, no such validation will be performed.
   * May also be set in PodSecurityContext.  If set in both SecurityContext and
   * PodSecurityContext, the value specified in SecurityContext takes precedence.
   */
  runAsNonRoot?: boolean;

  /**
   * Whether this container has a read-only root filesystem.
   * Default is false.
   * Note that this field cannot be set when spec.os.name is windows.
   */
  readOnlyRootFilesystem?: boolean;

  /**
   * AllowPrivilegeEscalation controls whether a process can gain more
   * privileges than its parent process. This bool directly controls if
   * the no_new_privs flag will be set on the container process.
   * AllowPrivilegeEscalation is true always when the container is:
   * 1) run as Privileged
   * 2) has CAP_SYS_ADMIN
   * Note that this field cannot be set when spec.os.name is windows.
   */
  allowPrivilegeEscalation?: boolean;

  /**
   * procMount denotes the type of proc mount to use for the containers.
   * The default is DefaultProcMount which uses the container runtime defaults for
   * readonly paths and masked paths.
   * This requires the ProcMountType feature flag to be enabled.
   * Note that this field cannot be set when spec.os.name is windows.
   */
  procMount?: string;

  /**
   * The seccomp options to use by this container. If seccomp options are
   * provided at both the pod & container level, the container options
   * override the pod options.
   * Note that this field cannot be set when spec.os.name is windows.
   */
  seccompProfile?: SeccompProfile;
}

/**
 * Adds and removes POSIX capabilities from running containers.
 */
export interface Capabilities {
  /**
   * Added capabilities
   */
  add?: string[];

  /**
   * Removed capabilities
   */
  drop?: string[];
}

/**
 * SELinuxOptions are the labels to be applied to the container
 */
export interface SELinuxOptions {
  /**
   * User is a SELinux user label that applies to the container.
   */
  user?: string;

  /**
   * Role is a SELinux role label that applies to the container.
   */
  role?: string;

  /**
   * Type is a SELinux type label that applies to the container.
   */
  type?: string;

  /**
   * Level is SELinux level label that applies to the container.
   */
  level?: string;
}

/**
 * WindowsSecurityContextOptions contain Windows-specific options and credentials.
 */
export interface WindowsSecurityContextOptions {
  /**
   * GMSACredentialSpecName is the name of the GMSA credential spec to use.
   */
  gmsaCredentialSpecName?: string;

  /**
   * GMSACredentialSpec is where the GMSA admission webhook
   * (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the
   * GMSA credential spec named by the GMSACredentialSpecName field.
   */
  gmsaCredentialSpec?: string;

  /**
   * The UserName in Windows to run the entrypoint of the container process.
   * Defaults to the user specified in image metadata if unspecified.
   * May also be set in PodSecurityContext. If set in both SecurityContext and
   * PodSecurityContext, the value specified in SecurityContext takes precedence.
   */
  runAsUserName?: string;

  /**
   * HostProcess determines if a container should be run as a 'Host Process' container.
   * All of a Pod's containers must have the same effective HostProcess value
   * (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).
   * In addition, if HostProcess is true then HostNetwork must also be set to true.
   */
  hostProcess?: boolean;
}

/**
 * SeccompProfile defines a pod/container's seccomp profile settings.
 * Only one profile source may be set.
 */
export interface SeccompProfile {
  /**
   * type indicates which kind of seccomp profile will be applied.
   * Valid options are:
   *
   * Localhost - a profile defined in a file on the node should be used.
   * RuntimeDefault - the container runtime default profile should be used.
   * Unconfined - no profile should be applied.
   */
  type: string;

  /**
   * localhostProfile indicates a profile defined in a file on the node should be used.
   * The profile must be preconfigured on the node to work.
   * Must be a descending path, relative to the kubelet's configured seccomp profile location.
   * Must be set if type is "Localhost". Must NOT be set for any other type.
   */
  localhostProfile?: string;
}

/**
 * PodSecurityContext holds pod-level security attributes and common container settings.
 * Some fields are also present in container.securityContext.  Field values of
 * container.securityContext take precedence over field values of PodSecurityContext.
 */
export interface PodSecurityContext {
  /**
   * The SELinux context to be applied to all containers.
   * If unspecified, the container runtime will allocate a random SELinux context for each
   * container.  May also be set in SecurityContext.  If set in
   * both SecurityContext and PodSecurityContext, the value specified in SecurityContext
   * takes precedence for that container.
   * Note that this field cannot be set when spec.os.name is windows.
   */
  seLinuxOptions?: SELinuxOptions;

  /**
   * The Windows specific settings applied to all containers.
   * If unspecified, the options within a container's SecurityContext will be used.
   * If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
   * Note that this field cannot be set when spec.os.name is linux.
   */
  windowsOptions?: WindowsSecurityContextOptions;

  /**
   * The UID to run the entrypoint of the container process.
   * Defaults to user specified in image metadata if unspecified.
   * May also be set in SecurityContext.  If set in both SecurityContext and
   * PodSecurityContext, the value specified in SecurityContext takes precedence
   * for that container.
   * Note that this field cannot be set when spec.os.name is windows.
   */
  runAsUser?: number;

  /**
   * The GID to run the entrypoint of the container process.
   * Uses runtime default if unset.
   * May also be set in SecurityContext.  If set in both SecurityContext and
   * PodSecurityContext, the value specified in SecurityContext takes precedence
   * for that container.
   * Note that this field cannot be set when spec.os.name is windows.
   */
  runAsGroup?: number;

  /**
   * Indicates that the container must run as a non-root user.
   * If true, the Kubelet will validate the image at runtime to ensure that it
   * does not run as UID 0 (root) and fail to start the container if it does.
   * If unset or false, no such validation will be performed.
   * May also be set in SecurityContext.  If set in both SecurityContext and
   * PodSecurityContext, the value specified in SecurityContext takes precedence.
   */
  runAsNonRoot?: boolean;

  /**
   * A list of groups applied to the first process run in each container, in addition
   * to the container's primary GID, the fsGroup (if specified), and group memberships
   * defined in the container image for the uid of the container process. If unspecified,
   * no additional groups are added to any container. Note that group memberships
   * defined in the container image for the uid of the container process are still effective,
   * even if they are not included in this list.
   * Note that this field cannot be set when spec.os.name is windows.
   */
  supplementalGroups?: number[];

  /**
   * A special supplemental group that applies to all containers in a pod.
   * Some volume types allow the Kubelet to change the ownership of that volume
   * to be owned by the pod:
   *
   * 1. The owning GID will be the FSGroup
   * 2. The setgid bit is set (new files created in the volume will be owned by FSGroup)
   * 3. The permission bits are OR'd with rw-rw----
   *
   * If unset, the Kubelet will not modify the ownership and permissions of any volume.
   * Note that this field cannot be set when spec.os.name is windows.
   */
  fsGroup?: number;

  /**
   * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported
   * sysctls (by the container runtime) might fail to launch.
   * Note that this field cannot be set when spec.os.name is windows.
   */
  sysctls?: Sysctl[];

  /**
   * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume
   * before being exposed inside Pod. This field will only apply to
   * volume types which support fsGroup based ownership(and permissions).
   * It will have no effect on ephemeral volume types such as: secret, configmaps
   * and emptydir.
   * Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used.
   * Note that this field cannot be set when spec.os.name is windows.
   */
  fsGroupChangePolicy?: string;

  /**
   * The seccomp options to use by the containers in this pod.
   * Note that this field cannot be set when spec.os.name is windows.
   */
  seccompProfile?: SeccompProfile;
}

/**
 * Sysctl defines a kernel parameter to be set
 */
export interface Sysctl {
  /**
   * Name of a property to set
   */
  name: string;

  /**
   * Value of a property to set
   */
  value: string;
}

/**
 * LocalObjectReference contains enough information to let you locate the
 * referenced object inside the same namespace.
 */
export interface LocalObjectReference {
  /**
   * Name of the referent.
   * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string;
}

/**
 * Affinity is a group of affinity scheduling rules.
 */
export interface Affinity {
  /**
   * Describes node affinity scheduling rules for the pod.
   */
  nodeAffinity?: NodeAffinity;

  /**
   * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
   */
  podAffinity?: PodAffinity;

  /**
   * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
   */
  podAntiAffinity?: PodAntiAffinity;
}

/**
 * Node affinity is a group of node affinity scheduling rules.
 */
export interface NodeAffinity {
  /**
   * If the affinity requirements specified by this field are not met at
   * scheduling time, the pod will not be scheduled onto the node.
   * If the affinity requirements specified by this field cease to be met
   * at some point during pod execution (e.g. due to an update), the system
   * may or may not try to eventually evict the pod from its node.
   */
  requiredDuringSchedulingIgnoredDuringExecution?: NodeSelector;

  /**
   * The scheduler will prefer to schedule pods to nodes that satisfy
   * the affinity expressions specified by this field, but it may choose
   * a node that violates one or more of the expressions. The node that is
   * most preferred is the one with the greatest sum of weights, i.e.
   * for each node that meets all of the scheduling requirements (resource
   * request, requiredDuringScheduling affinity expressions, etc.),
   * compute a sum by iterating through the elements of this field and adding
   * "weight" to the sum if the node matches the corresponding matchExpressions; the
   * node(s) with the highest sum are the most preferred.
   */
  preferredDuringSchedulingIgnoredDuringExecution?: PreferredSchedulingTerm[];
}

/**
 * A node selector represents the union of the results of one or more label queries
 * over a set of nodes; that is, it represents the OR of the selectors represented
 * by the node selector terms.
 */
export interface NodeSelector {
  /**
   * Required. A list of node selector terms. The terms are ORed.
   */
  nodeSelectorTerms: NodeSelectorTerm[];
}

/**
 * A null or empty node selector term matches no objects. The requirements of
 * them are ANDed.
 * The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 */
export interface NodeSelectorTerm {
  /**
   * A list of node selector requirements by node's labels.
   */
  matchExpressions?: NodeSelectorRequirement[];

  /**
   * A list of node selector requirements by node's fields.
   */
  matchFields?: NodeSelectorRequirement[];
}

/**
 * A node selector requirement is a selector that contains values, a key, and an operator
 * that relates the key and values.
 */
export interface NodeSelectorRequirement {
  /**
   * The label key that the selector applies to.
   */
  key: string;

  /**
   * Represents a key's relationship to a set of values.
   * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
   */
  operator: string;

  /**
   * An array of string values. If the operator is In or NotIn,
   * the values array must be non-empty. If the operator is Exists or DoesNotExist,
   * the values array must be empty. If the operator is Gt or Lt, the values
   * array must have a single element, which will be interpreted as an integer.
   * This array is replaced during a strategic merge patch.
   */
  values?: string[];
}

/**
 * An empty preferred scheduling term matches all objects with implicit weight 0
 * (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 */
export interface PreferredSchedulingTerm {
  /**
   * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
   */
  weight: number;

  /**
   * A node selector term, associated with the corresponding weight.
   */
  preference: NodeSelectorTerm;
}

/**
 * Pod affinity is a group of inter pod affinity scheduling rules.
 */
export interface PodAffinity {
  /**
   * If the affinity requirements specified by this field are not met at
   * scheduling time, the pod will not be scheduled onto the node.
   * If the affinity requirements specified by this field cease to be met
   * at some point during pod execution (e.g. due to a pod label update), the
   * system may or may not try to eventually evict the pod from its node.
   * When there are multiple elements, the lists of nodes corresponding to each
   * podAffinityTerm are intersected, i.e. all terms must be satisfied.
   */
  requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTerm[];

  /**
   * The scheduler will prefer to schedule pods to nodes that satisfy
   * the affinity expressions specified by this field, but it may choose
   * a node that violates one or more of the expressions. The node that is
   * most preferred is the one with the greatest sum of weights, i.e.
   * for each node that meets all of the scheduling requirements (resource
   * request, requiredDuringScheduling affinity expressions, etc.),
   * compute a sum by iterating through the elements of this field and adding
   * "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
   * node(s) with the highest sum are the most preferred.
   */
  preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTerm[];
}

/**
 * Pod anti-affinity is a group of inter pod anti affinity scheduling rules.
 */
export interface PodAntiAffinity {
  /**
   * If the anti-affinity requirements specified by this field are not met at
   * scheduling time, the pod will not be scheduled onto the node.
   * If the anti-affinity requirements specified by this field cease to be met
   * at some point during pod execution (e.g. due to a pod label update), the
   * system may or may not try to eventually evict the pod from its node.
   * When there are multiple elements, the lists of nodes corresponding to each
   * podAffinityTerm are intersected, i.e. all terms must be satisfied.
   */
  requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTerm[];

  /**
   * The scheduler will prefer to schedule pods to nodes that satisfy
   * the anti-affinity expressions specified by this field, but it may choose
   * a node that violates one or more of the expressions. The node that is
   * most preferred is the one with the greatest sum of weights, i.e.
   * for each node that meets all of the scheduling requirements (resource
   * request, requiredDuringScheduling anti-affinity expressions, etc.),
   * compute a sum by iterating through the elements of this field and adding
   * "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
   * node(s) with the highest sum are the most preferred.
   */
  preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTerm[];
}

/**
 * Defines a set of pods (namely those matching the labelSelector
 * relative to the given namespace(s)) that this pod should be
 * co-located (affinity) or not co-located (anti-affinity) with,
 * where co-located is defined as running on a node whose value of
 * the label with key <topologyKey> matches that of any node on which
 * a pod of the set of pods is running
 */
export interface PodAffinityTerm {
  /**
   * A label query over a set of resources, in this case pods.
   * If it's null, this PodAffinityTerm matches with no Pods.
   */
  labelSelector?: LabelSelector;

  /**
   * namespaces specifies a static list of namespace names that the term applies to.
   * The term is applied to the union of the namespaces listed in this field
   * and the ones selected by namespaceSelector.
   * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
   */
  namespaces?: string[];

  /**
   * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
   * the labelSelector in the specified namespaces, where co-located is defined as running on a node
   * whose value of the label with key topologyKey matches that of any node on which any of the
   * selected pods is running.
   * Empty topologyKey is not allowed.
   */
  topologyKey: string;

  /**
   * A label query over the set of namespaces that the term applies to.
   * The term is applied to the union of the namespaces selected by this field
   * and the ones listed in the namespaces field.
   * null selector and null or empty namespaces list means "this pod's namespace".
   * An empty selector ({}) matches all namespaces.
   */
  namespaceSelector?: LabelSelector;

  /**
   * MatchLabelKeys is a set of pod label keys to select which pods will
   * be taken into consideration. The keys are used to lookup values from the
   * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
   * to select the group of existing pods which pods will be taken into consideration
   * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
   * pod labels will be ignored. The default value is empty.
   * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
   * Also, matchLabelKeys cannot be set when labelSelector isn't set.
   * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
   */
  matchLabelKeys?: string[];

  /**
   * MismatchLabelKeys is a set of pod label keys to select which pods will
   * be taken into consideration. The keys are used to lookup values from the
   * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
   * to select the group of existing pods which pods will be taken into consideration
   * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
   * pod labels will be ignored. The default value is empty.
   * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
   * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
   * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
   */
  mismatchLabelKeys?: string[];
}

/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 */
export interface WeightedPodAffinityTerm {
  /**
   * weight associated with matching the corresponding podAffinityTerm,
   * in the range 1-100.
   */
  weight: number;

  /**
   * Required. A pod affinity term, associated with the corresponding weight.
   */
  podAffinityTerm: PodAffinityTerm;
}

/**
 * The pod this Toleration is attached to tolerates any taint that matches
 * the triple <key,value,effect> using the matching operator <operator>.
 */
export interface Toleration {
  /**
   * Key is the taint key that the toleration applies to. Empty means match all taint keys.
   * If the key is empty, operator must be Exists; this combination means to match all values and all keys.
   */
  key?: string;

  /**
   * Operator represents a key's relationship to the value.
   * Valid operators are Exists and Equal. Defaults to Equal.
   * Exists is equivalent to wildcard for value, so that a pod can
   * tolerate all taints of a particular category.
   */
  operator?: string;

  /**
   * Value is the taint value the toleration matches to.
   * If the operator is Exists, the value should be empty, otherwise just a regular string.
   */
  value?: string;

  /**
   * Effect indicates the taint effect to match. Empty means match all taint effects.
   * When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
   */
  effect?: string;

  /**
   * TolerationSeconds represents the period of time the toleration (which must be
   * of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
   * it is not set, which means tolerate the taint forever (do not evict). Zero and
   * negative values will be treated as 0 (evict immediately) by the system.
   */
  tolerationSeconds?: number;
}

/**
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the
 * pod's hosts file.
 */
export interface HostAlias {
  /**
   * IP address of the host file entry.
   */
  ip?: string;

  /**
   * Hostnames for the above IP address.
   */
  hostnames?: string[];
}

/**
 * PodDNSConfig defines the DNS parameters of a pod in addition to
 * those generated from DNSPolicy.
 */
export interface PodDNSConfig {
  /**
   * A list of DNS name server IP addresses.
   * This will be appended to the base nameservers generated from DNSPolicy.
   * Duplicated nameservers will be removed.
   */
  nameservers?: string[];

  /**
   * A list of DNS search domains for host-name lookup.
   * This will be appended to the base search paths generated from DNSPolicy.
   * Duplicated search paths will be removed.
   */
  searches?: string[];

  /**
   * A list of DNS resolver options.
   * This will be merged with the base options generated from DNSPolicy.
   * Duplicated entries will be removed. Resolution options given in Options
   * will override those that appear in the base DNSPolicy.
   */
  options?: PodDNSConfigOption[];
}

/**
 * PodDNSConfigOption defines DNS resolver options of a pod.
 */
export interface PodDNSConfigOption {
  /**
   * Required.
   */
  name?: string;

  /**
   * value is the value of the option.
   */
  value?: string;
}

/**
 * PodReadinessGate contains the reference to a pod condition
 */
export interface PodReadinessGate {
  /**
   * ConditionType refers to a condition in the pod's condition list with matching type.
   */
  conditionType: string;
}

/**
 * TopologySpreadConstraint specifies how to spread matching pods among the given topology.
 */
export interface TopologySpreadConstraint {
  /**
   * MaxSkew describes the degree to which pods may be unevenly distributed.
   * When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference
   * between the number of matching pods in the target topology and the global minimum.
   * The global minimum is the minimum number of matching pods in an eligible domain
   * or zero if the number of eligible domains is less than MinDomains.
   * For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same
   * labelSelector spread as 2/2/1:
   * In this case, the global minimum is 1.
   * +-------+-------+-------+
   * | zone1 | zone2 | zone3 |
   * +-------+-------+-------+
   * |  P P  |  P P  |   P   |
   * +-------+-------+-------+
   * - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2;
   * scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2)
   * violate MaxSkew(1).
   * - if MaxSkew is 2, incoming pod can be scheduled onto any zone.
   * When `whenUnsatisfiable=ScheduleAnyway`, it is used to give higher precedence
   * to topologies that satisfy it.
   * It's a required field. Default value is 1 and 0 is not allowed.
   */
  maxSkew: number;

  /**
   * TopologyKey is the key of node labels. Nodes that have a label with this key
   * and identical values are considered to be in the same topology.
   * We consider each <key, value> as a "bucket", and try to put balanced number
   * of pods into each bucket.
   * We define a domain as a particular instance of a topology.
   * Also, we define an eligible domain as a domain whose nodes meet the requirements of
   * nodeAffinityPolicy and nodeTaintsPolicy.
   * e.g. If TopologyKey is "kubernetes.io/hostname", each Node is a domain of that topology.
   * And, if TopologyKey is "topology.kubernetes.io/zone", each zone is a domain of that topology.
   * It's a required field.
   */
  topologyKey: string;

  /**
   * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy
   * the spread constraint.
   * - DoNotSchedule (default) tells the scheduler not to schedule it.
   * - ScheduleAnyway tells the scheduler to schedule the pod in any location,
   *   but giving higher precedence to topologies that would help reduce the
   *   skew.
   * A constraint is considered "Unsatisfiable" for an incoming pod
   * if and only if every possible node assignment for that pod would violate
   * "MaxSkew" on some topology.
   * For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same
   * labelSelector spread as 3/1/1:
   * +-------+-------+-------+
   * | zone1 | zone2 | zone3 |
   * +-------+-------+-------+
   * | P P P |   P   |   P   |
   * +-------+-------+-------+
   * If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled
   * to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies
   * MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler
   * won't make it *more* imbalanced.
   * It's a required field.
   */
  whenUnsatisfiable: string;

  /**
   * LabelSelector is used to find matching pods.
   * Pods that match this label selector are counted to determine the number of pods
   * in their corresponding topology domain.
   */
  labelSelector?: LabelSelector;

  /**
   * MinDomains indicates a minimum number of eligible domains.
   * When the number of eligible domains with matching topology keys is less than minDomains,
   * Pod Topology Spread treats "global minimum" as 0, and then the calculation of Skew is performed.
   * And when the number of eligible domains with matching topology keys equals or greater than minDomains,
   * this value has no effect on scheduling.
   * As a result, when the number of eligible domains is less than minDomains,
   * scheduler won't schedule more than maxSkew Pods to those domains.
   * If value is nil, the constraint behaves as if MinDomains is equal to 1.
   * Valid values are integers greater than 0.
   * When value is not nil, WhenUnsatisfiable must be DoNotSchedule.
   */
  minDomains?: number;

  /**
   * NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector
   * when calculating pod topology spread skew. Options are:
   * - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations.
   * - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations.
   *
   * If this value is nil, the behavior is equivalent to the Honor policy.
   * This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
   */
  nodeAffinityPolicy?: string;

  /**
   * NodeTaintsPolicy indicates how we will treat node taints when calculating
   * pod topology spread skew. Options are:
   * - Honor: nodes without taints, along with tainted nodes for which the incoming pod
   * has a toleration, are included.
   * - Ignore: node taints are ignored. All nodes are included.
   *
   * If this value is nil, the behavior is equivalent to the Ignore policy.
   * This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
   */
  nodeTaintsPolicy?: string;

  /**
   * MatchLabelKeys is a set of pod label keys to select the pods over which
   * spreading will be calculated. The keys are used to lookup values from the
   * incoming pod labels, those key-value labels are ANDed with labelSelector
   * to select the group of existing pods over which spreading will be calculated
   * for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector.
   * MatchLabelKeys cannot be set when LabelSelector isn't set.
   * Keys that don't exist in the incoming pod labels will
   * be ignored. A null or empty list means only match against labelSelector.
   *
   * This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
   */
  matchLabelKeys?: string[];
}

/**
 * PodOS defines the OS parameters of a pod.
 */
export interface PodOS {
  /**
   * Name is the name of the operating system. The currently supported values are linux and windows.
   * Additional value may be defined in future and can be one of:
   * https://github.com/opencontainers/runtime-spec/blob/master/config.md#platform-specific-configuration
   * Clients should expect to handle additional values and treat unrecognized values in this field as os: null
   */
  name: string;
}

/**
 * PodSchedulingGate is associated to a Pod to guard its scheduling.
 */
export interface PodSchedulingGate {
  /**
   * Name of the scheduling gate.
   * Each scheduling gate must have a unique name field.
   */
  name: string;
}

/**
 * PodResourceClaim references exactly one ResourceClaim through a ClaimSource.
 * It adds a name to it that uniquely identifies the ResourceClaim inside the Pod.
 * Containers that need access to the ResourceClaim reference it with this name.
 */
export interface PodResourceClaim {
  /**
   * Name uniquely identifies this resource claim inside the pod.
   * This must be a DNS_LABEL.
   */
  name: string;

  /**
   * Source describes where to find the ResourceClaim.
   */
  source?: ClaimSource;
}

/**
 * ClaimSource describes a reference to a ResourceClaim.
 *
 * Exactly one of these fields should be set.  Consumers of this type must
 * treat an empty object as if it has an unknown value.
 */
export interface ClaimSource {
  /**
   * ResourceClaimName is the name of a ResourceClaim object in the same
   * namespace as this pod.
   */
  resourceClaimName?: string;

  /**
   * ResourceClaimTemplateName is the name of a ResourceClaimTemplate
   * object in the same namespace as this pod.
   *
   * The template will be used to create a new ResourceClaim, which will
   * be bound to this pod. When this pod is deleted, the ResourceClaim
   * will also be deleted. The pod name and resource name, along with a
   * generated component, will be used to form a unique name for the
   * ResourceClaim, which will be recorded in pod.status.resourceClaimStatuses.
   *
   * This field is immutable and no changes will be made to the
   * corresponding ResourceClaim by the control plane after creating the
   * ResourceClaim.
   */
  resourceClaimTemplateName?: string;
}


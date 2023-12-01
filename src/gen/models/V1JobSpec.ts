/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.28.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1LabelSelector } from '../models/V1LabelSelector';
import { V1PodFailurePolicy } from '../models/V1PodFailurePolicy';
import { V1PodTemplateSpec } from '../models/V1PodTemplateSpec';
import { HttpFile } from '../http/http';

/**
* JobSpec describes how the job execution will look like.
*/
export class V1JobSpec {
    /**
    * Specifies the duration in seconds relative to the startTime that the job may be continuously active before the system tries to terminate it; value must be positive integer. If a Job is suspended (at creation or through an update), this timer will effectively be stopped and reset when the Job is resumed again.
    */
    'activeDeadlineSeconds'?: number;
    /**
    * Specifies the number of retries before marking this job failed. Defaults to 6
    */
    'backoffLimit'?: number;
    /**
    * Specifies the limit for the number of retries within an index before marking this index as failed. When enabled the number of failures per index is kept in the pod\'s batch.kubernetes.io/job-index-failure-count annotation. It can only be set when Job\'s completionMode=Indexed, and the Pod\'s restart policy is Never. The field is immutable. This field is alpha-level. It can be used when the `JobBackoffLimitPerIndex` feature gate is enabled (disabled by default).
    */
    'backoffLimitPerIndex'?: number;
    /**
    * completionMode specifies how Pod completions are tracked. It can be `NonIndexed` (default) or `Indexed`.  `NonIndexed` means that the Job is considered complete when there have been .spec.completions successfully completed Pods. Each Pod completion is homologous to each other.  `Indexed` means that the Pods of a Job get an associated completion index from 0 to (.spec.completions - 1), available in the annotation batch.kubernetes.io/job-completion-index. The Job is considered complete when there is one successfully completed Pod for each index. When value is `Indexed`, .spec.completions must be specified and `.spec.parallelism` must be less than or equal to 10^5. In addition, The Pod name takes the form `$(job-name)-$(index)-$(random-string)`, the Pod hostname takes the form `$(job-name)-$(index)`.  More completion modes can be added in the future. If the Job controller observes a mode that it doesn\'t recognize, which is possible during upgrades due to version skew, the controller skips updates for the Job.
    */
    'completionMode'?: string;
    /**
    * Specifies the desired number of successfully finished pods the job should be run with.  Setting to null means that the success of any pod signals the success of all pods, and allows parallelism to have any positive value.  Setting to 1 means that parallelism is limited to 1 and the success of that pod signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
    */
    'completions'?: number;
    /**
    * manualSelector controls generation of pod labels and pod selectors. Leave `manualSelector` unset unless you are certain what you are doing. When false or unset, the system pick labels unique to this job and appends those labels to the pod template.  When true, the user is responsible for picking unique labels and specifying the selector.  Failure to pick a unique label may cause this and other jobs to not function correctly.  However, You may see `manualSelector=true` in jobs that were created with the old `extensions/v1beta1` API. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#specifying-your-own-pod-selector
    */
    'manualSelector'?: boolean;
    /**
    * Specifies the maximal number of failed indexes before marking the Job as failed, when backoffLimitPerIndex is set. Once the number of failed indexes exceeds this number the entire Job is marked as Failed and its execution is terminated. When left as null the job continues execution of all of its indexes and is marked with the `Complete` Job condition. It can only be specified when backoffLimitPerIndex is set. It can be null or up to completions. It is required and must be less than or equal to 10^4 when is completions greater than 10^5. This field is alpha-level. It can be used when the `JobBackoffLimitPerIndex` feature gate is enabled (disabled by default).
    */
    'maxFailedIndexes'?: number;
    /**
    * Specifies the maximum desired number of pods the job should run at any given time. The actual number of pods running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
    */
    'parallelism'?: number;
    'podFailurePolicy'?: V1PodFailurePolicy;
    /**
    * podReplacementPolicy specifies when to create replacement Pods. Possible values are: - TerminatingOrFailed means that we recreate pods   when they are terminating (has a metadata.deletionTimestamp) or failed. - Failed means to wait until a previously created Pod is fully terminated (has phase   Failed or Succeeded) before creating a replacement Pod.  When using podFailurePolicy, Failed is the the only allowed value. TerminatingOrFailed and Failed are allowed values when podFailurePolicy is not in use. This is an alpha field. Enable JobPodReplacementPolicy to be able to use this field.
    */
    'podReplacementPolicy'?: string;
    'selector'?: V1LabelSelector;
    /**
    * suspend specifies whether the Job controller should create Pods or not. If a Job is created with suspend set to true, no Pods are created by the Job controller. If a Job is suspended after creation (i.e. the flag goes from false to true), the Job controller will delete all active Pods associated with this Job. Users must design their workload to gracefully handle this. Suspending a Job will reset the StartTime field of the Job, effectively resetting the ActiveDeadlineSeconds timer too. Defaults to false.
    */
    'suspend'?: boolean;
    'template': V1PodTemplateSpec;
    /**
    * ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is unset, the Job won\'t be automatically deleted. If this field is set to zero, the Job becomes eligible to be deleted immediately after it finishes.
    */
    'ttlSecondsAfterFinished'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "activeDeadlineSeconds",
            "baseName": "activeDeadlineSeconds",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "backoffLimit",
            "baseName": "backoffLimit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "backoffLimitPerIndex",
            "baseName": "backoffLimitPerIndex",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "completionMode",
            "baseName": "completionMode",
            "type": "string",
            "format": ""
        },
        {
            "name": "completions",
            "baseName": "completions",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "manualSelector",
            "baseName": "manualSelector",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "maxFailedIndexes",
            "baseName": "maxFailedIndexes",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "parallelism",
            "baseName": "parallelism",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "podFailurePolicy",
            "baseName": "podFailurePolicy",
            "type": "V1PodFailurePolicy",
            "format": ""
        },
        {
            "name": "podReplacementPolicy",
            "baseName": "podReplacementPolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "V1LabelSelector",
            "format": ""
        },
        {
            "name": "suspend",
            "baseName": "suspend",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "V1PodTemplateSpec",
            "format": ""
        },
        {
            "name": "ttlSecondsAfterFinished",
            "baseName": "ttlSecondsAfterFinished",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return V1JobSpec.attributeTypeMap;
    }

    public constructor() {
    }
}


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

import { V1JobTemplateSpec } from '../models/V1JobTemplateSpec';
import { HttpFile } from '../http/http';

/**
* CronJobSpec describes how the job execution will look like and when it will actually run.
*/
export class V1CronJobSpec {
    /**
    * Specifies how to treat concurrent executions of a Job. Valid values are:  - \"Allow\" (default): allows CronJobs to run concurrently; - \"Forbid\": forbids concurrent runs, skipping next run if previous run hasn\'t finished yet; - \"Replace\": cancels currently running job and replaces it with a new one
    */
    'concurrencyPolicy'?: string;
    /**
    * The number of failed finished jobs to retain. Value must be non-negative integer. Defaults to 1.
    */
    'failedJobsHistoryLimit'?: number;
    'jobTemplate': V1JobTemplateSpec;
    /**
    * The schedule in Cron format, see https://en.wikipedia.org/wiki/Cron.
    */
    'schedule': string;
    /**
    * Optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones.
    */
    'startingDeadlineSeconds'?: number;
    /**
    * The number of successful finished jobs to retain. Value must be non-negative integer. Defaults to 3.
    */
    'successfulJobsHistoryLimit'?: number;
    /**
    * This flag tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false.
    */
    'suspend'?: boolean;
    /**
    * The time zone name for the given schedule, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones. If not specified, this will default to the time zone of the kube-controller-manager process. The set of valid time zone names and the time zone offset is loaded from the system-wide time zone database by the API server during CronJob validation and the controller manager during execution. If no system-wide time zone database can be found a bundled version of the database is used instead. If the time zone name becomes invalid during the lifetime of a CronJob or due to a change in host configuration, the controller will stop creating new new Jobs and will create a system event with the reason UnknownTimeZone. More information can be found in https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#time-zones
    */
    'timeZone'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "concurrencyPolicy",
            "baseName": "concurrencyPolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "failedJobsHistoryLimit",
            "baseName": "failedJobsHistoryLimit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "jobTemplate",
            "baseName": "jobTemplate",
            "type": "V1JobTemplateSpec",
            "format": ""
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "string",
            "format": ""
        },
        {
            "name": "startingDeadlineSeconds",
            "baseName": "startingDeadlineSeconds",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "successfulJobsHistoryLimit",
            "baseName": "successfulJobsHistoryLimit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "suspend",
            "baseName": "suspend",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1CronJobSpec.attributeTypeMap;
    }

    public constructor() {
    }
}


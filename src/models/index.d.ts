import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerStatusUpdates = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StatusUpdates, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id?: string | null;
  readonly status?: string | null;
  readonly create_on?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStatusUpdates = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StatusUpdates, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id?: string | null;
  readonly status?: string | null;
  readonly create_on?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StatusUpdates = LazyLoading extends LazyLoadingDisabled ? EagerStatusUpdates : LazyStatusUpdates

export declare const StatusUpdates: (new (init: ModelInit<StatusUpdates>) => StatusUpdates) & {
  copyOf(source: StatusUpdates, mutator: (draft: MutableModel<StatusUpdates>) => MutableModel<StatusUpdates> | void): StatusUpdates;
}
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStatusUpdates = /* GraphQL */ `
  query GetStatusUpdates($id: ID!) {
    getStatusUpdates(id: $id) {
      id
      user_id
      status
      create_on
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listStatusUpdates = /* GraphQL */ `
  query ListStatusUpdates(
    $filter: ModelStatusUpdatesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStatusUpdates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_id
        status
        create_on
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStatusUpdates = /* GraphQL */ `
  query SyncStatusUpdates(
    $filter: ModelStatusUpdatesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStatusUpdates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        user_id
        status
        create_on
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;

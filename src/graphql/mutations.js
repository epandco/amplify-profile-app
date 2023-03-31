/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStatusUpdates = /* GraphQL */ `
  mutation CreateStatusUpdates(
    $input: CreateStatusUpdatesInput!
    $condition: ModelStatusUpdatesConditionInput
  ) {
    createStatusUpdates(input: $input, condition: $condition) {
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
export const updateStatusUpdates = /* GraphQL */ `
  mutation UpdateStatusUpdates(
    $input: UpdateStatusUpdatesInput!
    $condition: ModelStatusUpdatesConditionInput
  ) {
    updateStatusUpdates(input: $input, condition: $condition) {
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
export const deleteStatusUpdates = /* GraphQL */ `
  mutation DeleteStatusUpdates(
    $input: DeleteStatusUpdatesInput!
    $condition: ModelStatusUpdatesConditionInput
  ) {
    deleteStatusUpdates(input: $input, condition: $condition) {
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

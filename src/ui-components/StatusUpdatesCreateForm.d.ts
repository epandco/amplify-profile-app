/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StatusUpdatesCreateFormInputValues = {
    user_id?: string;
    status?: string;
    create_on?: string;
};
export declare type StatusUpdatesCreateFormValidationValues = {
    user_id?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    create_on?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StatusUpdatesCreateFormOverridesProps = {
    StatusUpdatesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user_id?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    create_on?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StatusUpdatesCreateFormProps = React.PropsWithChildren<{
    overrides?: StatusUpdatesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StatusUpdatesCreateFormInputValues) => StatusUpdatesCreateFormInputValues;
    onSuccess?: (fields: StatusUpdatesCreateFormInputValues) => void;
    onError?: (fields: StatusUpdatesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StatusUpdatesCreateFormInputValues) => StatusUpdatesCreateFormInputValues;
    onValidate?: StatusUpdatesCreateFormValidationValues;
} & React.CSSProperties>;
export default function StatusUpdatesCreateForm(props: StatusUpdatesCreateFormProps): React.ReactElement;

import { ReactNode } from 'react';

type ContentProps = {
  children: ReactNode;
  filled?: boolean;
  helperText?: string;
  label?: string;
  required?: boolean;
}

type FeedbackProps =
  | {
    active?: boolean;
    disabled?: never;
    feedback?: 'error' | 'success';
  }
  | {
    active?: never;
    disabled?: boolean;
    feedback?: never;
  }

export type InputFeedbackContainerProps = ContentProps & FeedbackProps

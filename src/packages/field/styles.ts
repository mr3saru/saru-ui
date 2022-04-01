import { CommomTypes } from 'types/field'

export const commonStyles = ({ fontSize }: Pick<CommomTypes, 'fontSize'>) => `
  input,
  textarea {
    display: block;
    padding: var(--spacing-compact);
    border: 1px solid var(--light);
    color: var(--black);
    font-size: var(--font-${fontSize});
  }
  input,
  textarea {
    height: fit-content;
    width: 100%;
  }
  input,
  textarea:disabled {
    background: var(--lighter);
    color: var(--gray);
  }
  ::placeholder {
    color: var(--gray);
  }
`

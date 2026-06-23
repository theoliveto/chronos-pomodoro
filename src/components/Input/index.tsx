import styles from './styles.module.css';

type InputProps = { 
    id: string
    label: string
} & React.ComponentProps<'input'>;

export function Input({ id, label, type, ...rest }: InputProps) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input className={styles.input} id={id} type={type} {...rest} />
        </>
    )
}

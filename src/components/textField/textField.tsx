import "./textField.css";

export default function TextField(props: any) {
  const {
    name,
    type = "text",
    className = "form-control custom",
    label,
    icon,
    ...rest
  } = props;

  return (
    <div className="textfield-wrapper">
      {label && (
        <label className="form-control-label" htmlFor={name}>
          {label}
        </label>
      )}

      <input {...rest} name={name} type={type} className={className}/>
      {icon && (
        <span className="form-control-right-icon">
          <img alt="mail" src={icon} height="24px" width="24px" />
        </span>
      )}
    </div>
  );
}

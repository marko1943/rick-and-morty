import { Field } from "../../types";
import styles from "./FieldsView.module.scss";

const FieldsView = ({
  fields,
  values,
}: {
  fields: Field[];
  values: Array<Record<string, string>>;
}) => {
  return (
    <div className={styles.FieldsView}>
      <table>
        <thead>
          <tr>
            {fields?.map((field: Field) => (
              <th key={field.id}>{field.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map((value) => {
            return (
              <tr key={value.id}>
                {fields.map((field: Field) => (
                  <td key={field.id}>
                    <span>{value[field.name]}</span>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { FieldsView };

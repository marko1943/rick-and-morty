import { Action } from "../../components/Action/Action";
import { Field } from "../../types";
import { useNavigate } from "react-router-dom";

import styles from "./FieldsView.module.scss";

const FieldsView = ({
  fields,
  values,
  loading,
  error,
}: {
  fields: Field[];
  values: Array<Record<string, string>>;
  loading: boolean;
  error: any;
}) => {
  const navigate = useNavigate();

  const handleClick = (id: string, type: string) => {
    navigate(`/${type}/${id}`);
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.FieldsView}>
          <table>
            <thead>
              <tr>
                {fields?.map((field: Field) => (
                  <th className="capitalize" key={field.id}>
                    {field.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...values].map((value) => {
                return (
                  <tr key={value.id}>
                    {fields.map((field: Field) =>
                      field.name !== "action" ? (
                        <td key={field.id}>
                          <span>{value[field.name]}</span>
                        </td>
                      ) : (
                        <Action
                          key={field.id}
                          takeAction={() => {
                            handleClick(
                              value.id,
                              value.__typename.toLowerCase()
                            );
                          }}
                        />
                      )
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {error && <div className="error">Error: {error.message}</div>}
    </>
  );
};

export { FieldsView };

import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_CHARACTER } from "../../graphql/queries/Character.query";
import { GET_EPISODE } from "../../graphql/queries/Episode.query";
import { GET_LOCATION } from "../../graphql/queries/Location.query";
import styles from "./DetailsPage.module.scss";

const DetailsPage = () => {
  const [data, setData] = useState<Record<string, any>>({});
  const navigate = useNavigate();
  const { dataType, id } = useParams();

  const [getCharacter] = useLazyQuery(GET_CHARACTER, {
    variables: { id: id },
    onCompleted: (res) => {
      setData(res.character);
    },
  });

  const [getEpisode] = useLazyQuery(GET_EPISODE, {
    variables: { id: id },
    onCompleted: (res) => {
      setData(res.episode);
    },
  });

  const [getLocation] = useLazyQuery(GET_LOCATION, {
    variables: { id: id },
    onCompleted: (res) => {
      setData(res.location);
    },
  });

  useEffect(() => {
    if (dataType === "character") getCharacter();
    if (dataType === "episode") getEpisode();
    if (dataType === "location") getLocation();
  }, [dataType, getCharacter, getEpisode, getLocation]);

  const goBack = () => {
    navigate(`/`);
  };

  return (
    <div className={styles.DetailsPage}>
      <h1 className="capitalize">{dataType} Details</h1>

      <button onClick={goBack}>Back</button>

      {/* TODO extract to a component */}
      {/* In practice there would be a different component for each entity (character, location, episode) */}
      {/* Because they'd all have different views. Maybe just a shared Layout component or something */}
      {/* That would take too much time, not going to do it for purposes of this project */}
      {data && (
        <div className={styles.layout}>
          <h2>{data.name}</h2>
          {dataType === "character" && (
            <div className={styles.data}>
              <img src={data.image!} alt={data.name!} />

              <p>Status: {data.status}</p>
              <p>Species: {data.species}</p>
              {data.episode && (
                <div className={styles.episodes}>
                  <b>Appears in episodes:</b>
                  {data.episode.map((episode: any) => (
                    <p className={styles.episode} key={episode.name}>
                      {episode.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
          {dataType === "location" && (
            <div className={styles.data}>
              <p>Type: {data.type}</p>
              <p>Created: {data.created}</p>
              {data.residents && (
                <div className={styles.episodes}>
                  <b>Residents: </b>
                  {data.residents.map((resident: any) => (
                    <p className={styles.episode} key={resident.id}>
                      {resident.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
          {dataType === "episode" && (
            <div className={styles.data}>
              <p>Air Date: {data.air_date}</p>
              <p>Episode: {data.episode}</p>
              <p>Created: {data.created}</p>
              {data.characters && (
                <div className={styles.episodes}>
                  <b>Characters: </b>
                  {data.characters.map((character: any) => (
                    <p className={styles.episode} key={character.id}>
                      {character.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { DetailsPage };

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ item, children, url }) => {
  if (url) {
    return (
      <Link href={url} passHref>
        <div className="card card-shadow" style={{ width: "18rem" }}>
          {item.image && (
            <Image
              src={item.image}
              className="card-img-top"
              alt="..."
              width={150}
              height={200}
            />
          )}
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{children}</p>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <div className="card card-shadow" style={{ width: "18rem" }}>
        {item.image && (
          <Image
            src={item.image}
            className="card-img-top"
            alt="..."
            width={150}
            height={200}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{children}</p>
        </div>
      </div>
    );
  }
};

export default Card;

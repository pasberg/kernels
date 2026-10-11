CREATE TABLE IF NOT EXISTS votes (
  client TEXT NOT NULL,
  name   TEXT NOT NULL,
  card   TEXT NOT NULL,
  v      INTEGER NOT NULL CHECK (v BETWEEN 1 AND 5),
  PRIMARY KEY (client, name, card)
);
CREATE INDEX IF NOT EXISTS votes_card ON votes (card);

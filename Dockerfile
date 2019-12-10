FROM node:12-slim AS builder
WORKDIR /home/node
COPY . .
RUN npm install --production && npm prune --production # Copy cached modules in CircleCI but only keep production dependencies in the container


FROM node:12-slim
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ARG TAG
ENV TAG $TAG
WORKDIR /home/node
COPY --from=builder /home/node .
USER node
HEALTHCHECK --retries=2 --interval=10s --timeout=5s --start-period=5s CMD node node_modules/@5app/health-check-helpers/bin/check.js
CMD ["node", "index.js"]

FROM node:18 AS builder
ENV NEXT_TELEMETRY_DISABLED 1

#RUN apk add --no-cache libc6-compat
WORKDIR /opt/medii/web

COPY package.json package-lock.json ./
#temporary - applying env variables from Gitlab
COPY .env.example ./.env
RUN npm install --production
RUN npm run build

FROM node:18 AS runner
WORKDIR /opt/medii/web

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /opt/medii/web/.next ./.next
COPY --from=builder /opt/medii/web/node_modules ./node_modules
COPY --from=builder /opt/medii/web/package.json ./package.json
COPY --from=builder /opt/medii/web/.env.testing ./.env

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]

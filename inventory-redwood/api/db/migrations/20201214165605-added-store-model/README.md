# Migration `20201214165605-added-store-model`

This migration has been generated by Terry Brown at 12/14/2020, 10:56:05 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Store" (
"id" SERIAL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201211170908-create-models..20201214165605-added-store-model
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -40,4 +40,10 @@
   name  String
   date  String
   description String
 }
+
+// example
+model Store {
+  id    Int     @id @default(autoincrement())
+  name  String
+}
```



#!/bin/bash

node updateConfig.js
git add -A
git commit -m "AUTO PRE-PUSH HOOK: Update lastUpdated field in siteConfig"
git push --no-verify
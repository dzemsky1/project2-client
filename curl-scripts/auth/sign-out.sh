curl "https://library-express-api.herokuapp.com/sign-in" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo

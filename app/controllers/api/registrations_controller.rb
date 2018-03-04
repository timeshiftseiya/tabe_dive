class Api::RegistrationsController < DeviseTokenAuth::RegistrationsController
  # skip_before_action :authenticate_user_from_token!, only: [:create]
end
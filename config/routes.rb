Rails.application.routes.draw do
  root 'override#index'
  get 'tasks/index'
  post 'tasks/create'
  patch "/tasks/:id", to: "tasks#update"
  get '/*path' => 'override#index'
end

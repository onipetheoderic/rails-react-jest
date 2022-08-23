class TasksController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    tasks = Task.all.order(created_at: :DESC)
    if tasks.length == 0 
      render json: { message: "No tasks is present, kindly create a new one" }
    else
      render json: tasks
    end
    
  end

  def create
    tasks = Task.create!(tasks_params)
    if tasks
      render json: tasks
    else
      render json: tasks.errors
    end
  end

  def update
    tasks = current_task.update(time: Time.now.strftime("%I:%M %p"), checked: true)
  end


  private

  def tasks_params
    params.permit(:avatar, :description)
  end

  def current_task
    @task = Task.find(params[:id])
  end
end

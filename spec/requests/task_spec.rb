require "rails_helper"

RSpec.describe "Tasks Request API", type: :request do
  let!(:tasks) { create_list(:task, 10) }
  let(:task_id) { tasks.first.id }

  describe "GET /tasks" do
    before { get "/tasks" }
    
    it 'return status code 200' do
        expect(response).to have_http_status(200)
    end	
  end

  describe "POST /tasks" do
    context "when the request is valid" do
      before { post "/tasks/create", params: { description: "Go to the Gym" } }
      it "updates the task" do
        expect(response).to have_http_status(200)
      end
    end
  end

  describe "PATCH /tasks/:id" do
    context "when the request is valid" do
      before { patch "/tasks/#{task_id}" }
      it "updates the task" do
        expect(response).to have_http_status(204)
      end
    end
  end

end
require "sinatra"

get "/" do
	erb :index
end

post "/emails" do
  # send the email
end
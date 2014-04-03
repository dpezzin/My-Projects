Public Class frmMain

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

    End Sub

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles cmdOK.Click

        'A messagebox will be showed with the text from the textbox
        MessageBox.Show(txtName.Text)

    End Sub

End Class
